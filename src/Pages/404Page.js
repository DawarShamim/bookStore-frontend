import React,{useState} from "react";
import ToastContainer from '../components/ToastContainer'; // Update the import path

function Page404() {
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        ToastContainer.showToast('Login successful!', 'error', handleCloseAlert);
   
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    // ToastContainer.showToast('Login successful!', 'error',handleCloseAlert);

    return (
        <div>
            <h4>uh oh! </h4>
            <p>We couldn't find what you were searching for. Try cheching the spelling or try again Later.</p>
            <button onClick={handleShowAlert}>Show Alert</button>
        </div>


    );
}

export default Page404;