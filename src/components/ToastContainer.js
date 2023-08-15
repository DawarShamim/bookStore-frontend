import React, { useState } from 'react';
import Toast from './StatusPrompt'; // Import your Toast component

function ToastContainer() {
    const [toasts, setToasts] = useState([]);

    function showToast(message, type) {
        const newToast = { message, type, id: Date.now() };
        setToasts(prevToasts => [...prevToasts, newToast]);

    };

    const removeToast = id => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    };


    
    ToastContainer.showToast=showToast;
    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
}

export default ToastContainer;