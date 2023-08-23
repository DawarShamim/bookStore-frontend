
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { setJwtToken } from '../Utils/cookieUtils';
import { SignupService } from '../Services/AuthService';
function Signup() {


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
                const token = await SignupService(payload);
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
                Signup
            </div>
            <Footer />
        </div>);
};

export default Signup;