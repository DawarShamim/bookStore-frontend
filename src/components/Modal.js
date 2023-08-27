import React, { useState } from "react";

export default function Modal({ buttonTitle, form }) {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [FormData, setFormData] = useState({});
    console.log(form);

    // Check LOG:

    // setFormData(prevFormData=>({
    //     ...prevFormData,form
    // }))



    const handleFieldChange = (event) => {

        const { name, value } = event.target;
        console.log(name, value);
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
        console.log(FormData);
        setIsLoading(false);
    };


    return (
        <>
            <button
                className="tracking-wider text-white bg-gradient-to-r mb-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button"
                onClick={() => setShowModal(true)}
            >
                {buttonTitle}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/2 my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {Object.keys(FormData).map((key) => (
                                        <div key={key} className="grid grid-cols-2 p-1">

                                            <label htmlFor={key} className="block w-7 text-slate-500 text-lg font-medium mb-1 mt-4">{key}</label>
                                            <input
                                                type="text"
                                                id={key}
                                                name={key}
                                                value={FormData[key]}
                                                onChange={handleFieldChange}
                                                onKeyDown={handleKeyDown}
                                                className="w-full p-2 border border-slate-200 rounded focus:outline-none focus:border-blue-500" />
                                        </div>))}


                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        onClick={handleSubmit}
                                        disabled={isLoading} // Disable the button while loading
                                    // className={`tracking-wider font-bold w-full text-white ${isLoading
                                    //     ? 'bg-gray-300 cursor-not-allowed' // Change button style when loading
                                    //     : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'
                                    //     } rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                                    >
                                        {isLoading ? 'Loading...' : 'Save Changes'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}