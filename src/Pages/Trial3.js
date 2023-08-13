import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

function Trial3() {

  const navigate = useNavigate();
  const handlePress =(Navigate_to) =>{
    navigate(Navigate_to);
  };

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
  return (
    <div className='my-9 flex'>
      <Navbar />
      <div className='flex w-full h-screen '>

        <section className='flex flex-grow m-10 justify-center h-3/4 items-center pt-35 bg-white shadow-lg rounded-lg overflow-hidden '>
          <div className="w-3/5 h-full  flex-grow justify-center items-center p-6 flex-row m-0.5 bg-slate-700 SidePanel">
            <div className="flex-col w-52 relative">
              <p className="text-center text-white">First Part</p>
            </div>
          </div>
          <div className=" w-2/5 h-full flex justify-center items-center bg-slate-700 flex-col m-0.5">
            <div className=" items-center">
              <label className='relative cursor-pointer mb-4'>
                <input
                  type="text"
                  placeholder="Author Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleFieldChange}
                  onKeyDown={handleKeyDown}
                  className='h-10 w-60 px-3 text-1xl text-white bg-slate-700 border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
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
                  className='h-10 w-60 px-3 text-1xl text-white bg-slate-700 border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-1xl text-white text-opacity-80 bg-slate-700 absolute left-4 top-2 px-1 transition duration-200 input-text'>Author Description</span>
              </label>
              <button onClick={handleSubmit} className="w-1/2 h-12 uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a onClick={()=>handlePress("/signup")} className="text-xs text-gray-100 uppercase cursor-pointer">or sign up</a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}


export default Trial3;
