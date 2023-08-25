import React, { useState } from "react";
import ToastContainer from '../components/ToastContainer'; // Update the import path
import TableLayout from "../components/TableLayout";
import { FiArrowLeft } from "react-icons/fi";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { PrivateRoute } from "../Utils/PrivateRoute";

function Page400({ type }) {
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        ToastContainer.showToast('Login successful!', 'error', handleCloseAlert);
    };
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    let errorCode, title, message;
    if (type === "403") {
        errorCode = 403;
        title = "Access Denied";
        message = "You do not have permission to access this page.";
    } else {
        errorCode = 404;
        title = "Page Not Found";
        message = "The page you are looking for does not exist."
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-semibold mb-4">{errorCode} - {title}</h1>
                <h2 className="text-3xl font-semibold mb-4">{message}</h2>
                <button onClick={handleGoBack} className="text-blue-500 hover:underline flex ">
                    <div className='text-right cursor-pointer'>{React.createElement(FiArrowLeft, { size: "20" })}</div>
                    Go back
                </button>
            </div>
            <PrivateRoute roles={["employee"]}>
                <div className="flex flex-col items-center justify-center h-screen bg-pink-100">

                    <button onClick={handleShowAlert}>Show Alert</button>
                </div>
                </PrivateRoute>

        </div>
    );
}

export default Page400;