import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { setJwtToken, getJwtToken, removeJwtToken } from '../Utils/cookieUtils';
import { loginService } from "../Services/AuthService";



function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const handlePress = (Navigate_to) => {
        navigate(Navigate_to);
    };

    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
    });
    const [Errors, setErrors] = useState({});

    const Validator = () => {
        setErrors({});
        let HasErrors = false;

        if (formData.Email.length === 0) {
            setErrors((prevErrors) => ({ ...prevErrors, Email: '*Enter Email Address' }));
            HasErrors = true;
        }
        if (formData.Password === "") {
            setErrors((prevErrors) => ({ ...prevErrors, Password: '*Enter Password' }));
            HasErrors = true;
        }
        return !HasErrors;
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]: value
        }));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        //Important Uncomment
        // const isValid = Validator();
        setIsLoading(true);
        const isValid = true;
        if (isValid) {
            try {
                const payload = {
                    usernameOrEmail: "mdawar",
                    password: "ammi7272",
                };
                // important Uncomment
                // const token = await loginService(formData);
                const token = await loginService(payload);
                setJwtToken(token);
                navigate('/ADashboard');
            } catch (error) {
                setErrors((prevErrors) => ({ ...prevErrors, Invalid: error.message }));
            }
        }
        setIsLoading(false);
    };

    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className="flex-1 py-40 px-40 bg-slate-700">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover SidePanel"></div>
                    <div className="w-full p-8 lg:w-1/2">
                        {/* <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2> */}
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3">
                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </a>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <a className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <a href="#" className="text-xs text-gray-500"></a>
                            </div>
                            <input
                                name="Email"
                                value={formData.Email}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${Errors.Email || Errors.Invalid? "border-red-700 bg-[#f1c0c0]" : "border-gray-300"} rounded py-2 px-4 block w-full appearance-none`}
                                type="email" />
                            {Errors.Email && <p className="text-[#FF9494] ">{Errors.Email}</p>}
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                {/* Important */}
                                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input
                                name="Password"
                                value={formData.Password}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${Errors.Password || Errors.Invalid? "border-red-700 bg-[#f1c0c0]" : "border-gray-300"} rounded py-2 px-4 block w-full appearance-none`}
                                type="password"

                            />
                            {Errors.Password && <p className="text-[#FF9494] ">{Errors.Password}</p>}
                            {Errors.Invalid && <p className="text-[#FF9494] ">{Errors.Invalid}</p>}
                        </div>
                        <div className="mt-8">
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading} // Disable the button while loading
                                className={`tracking-wider font-bold w-full text-white ${isLoading
                                    ? 'bg-gray-300 cursor-not-allowed' // Change button style when loading
                                    : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'
                                    } rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                            >
                                {isLoading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <a onClick={() => { handlePress('/Signup') }} className="cursor-pointer text-xs text-gray-500 uppercase">or sign up</a>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;