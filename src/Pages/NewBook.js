import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
function App() {

    const [formData, setFormData] = useState({
        Name: "",
        Description: "",
        Website: "",
        Title: "",
        Isbn: "",
        BookDescription: "",
        Genre: "",
        Price: ""
    });
    const [Errors, setErrors] = useState({});

    const Validator = () => {
        setErrors({});
        if (formData.Name === "") {
            setErrors((prevErrors) => ({ ...prevErrors, Name: '*Enter Email or Username' }));
        }
        if (Object.keys(Errors).length === 0) {
            return true;
        }
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

    const handleSubmit = () => {
        // console.log(formData);
        const isValid = Validator();
        if (isValid) {
            console.log("Errors Caught", Errors)
        } else {
            console.log("Nor errors");

            // Important
            // setFormData({
            //     Name: "",
            //     Description: "",
            //     Website: "",
            //     Title: "",
            //     Isbn: "",
            //     BookDescription: "",
            //     Genre: "",
            //     Price: ""
            // });
        }
    };

    return (<>
        <div className='flex'>
            <SideBar />
            <div className="flex-grow">
                <section className="flex m-10 shadow-lg justify-between mt-35">
                    <div className="w-full lg:w-3/4 h-screen flex justify-center items-center bg-slate-700 flex-col m-0.5">
                        <h1 className='text-white text-4xl mb-10'> Add new Book</h1>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="Author Name"
                                name="Name"
                                value={formData.Name}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10 px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Author Name</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="Description"
                                name="Description"
                                value={formData.Description}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10   px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Author Description</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="Input"
                                name="Website"
                                value={formData.Website}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10   px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Author Website</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="ISBN"
                                name="Title"
                                value={formData.Title}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10   px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Book Title</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="Input"
                                name="Isbn"
                                value={formData.Isbn}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10  px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>ISBN</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="Input"
                                name="BookDescription"
                                value={formData.BookDescription}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10   px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Book Description</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="text"
                                placeholder="ISBN"
                                name="Genre"
                                value={formData.Genre}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                className='h-10   px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none' />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Book Genre</span>
                        </label>
                        <label className='relative cursor-pointer mb-4'>
                            <input
                                type="number"
                                placeholder="Price"
                                name="Price"
                                value={formData.Price}
                                onChange={handleFieldChange}
                                onKeyDown={handleKeyDown}
                                disabled={false}
                                onWheel={(e) => e.preventDefault()}
                                className='h-10   px-3 text-1xl text-white bg-slate-700  border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200  py-2 block w-full appearance-none'
                            />
                            <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Book Price</span>
                        </label>

                        {/* #E74C3C  secondary*/}
                        {/* #2ECC71 tertiary */}
                        <button onClick={handleSubmit} className="w-1/2 h-12 uppercase  tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 ">Submit</button>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 h-screen flex-none justify-center items-center flex-row m-0.5 SidePanel">
                        <div >
                            <p>hdsgsahdg</p>
                        </div>

                    </div>
                </section>
                <Footer />
            </div>
        </div>
    </>

    );
}

export default App;
