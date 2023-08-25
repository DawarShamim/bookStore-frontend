import { useState } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar"
import React from 'react'
import { useNavigate } from "react-router-dom";

function CreateNewSales() {
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
                // const token = await loginService(payload);
                // setJwtToken(token);
                navigate('/ADashboard');
            } catch (error) {
                setErrors((prevErrors) => ({ ...prevErrors, Invalid: error.message }));
            }
        }
        setIsLoading(false);
    };
    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="m-20 h-4/6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                            <div className="w-full p-8 lg:w-1/2">
                                <p className="text-xl text-gray-600 text-center">Create Sales Receipt</p>


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
                                        className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${Errors.Email || Errors.Invalid ? "border-red-700 bg-[#f1c0c0]" : "border-gray-300"} rounded py-2 px-4 block w-full appearance-none`}
                                        type="email" />
                                    {Errors.Email && <p className="text-[#FF9494] ">{Errors.Email}</p>}
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    </div>
                                    <input
                                        name="Password"
                                        value={formData.Password}
                                        onChange={handleFieldChange}
                                        onKeyDown={handleKeyDown}
                                        className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border ${Errors.Password || Errors.Invalid ? "border-red-700 bg-[#f1c0c0]" : "border-gray-300"} rounded py-2 px-4 block w-full appearance-none`}
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
                                        {isLoading ? 'Loading...' : 'Generate Receipt'}
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:w-1/2 bg-cover SidePanel"></div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>);
};

export default CreateNewSales;