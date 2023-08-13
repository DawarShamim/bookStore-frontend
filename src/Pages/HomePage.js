import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';

function Home() {
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const delay = 2000;
    const debounce = setTimeout(() => {
      // console.log("HIT API");
      handleSubmit();
    }, delay);
    return () => {
      clearTimeout(debounce);
    }
  }, [searchText]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (searchText === "") {
      console.log("Errors Caught")
    } else {
      console.log("Button Pressed Hit API");
    }
  }

  return (<>
    <div className='my-9 flex-col'>
      <Navbar />
      <div className='mt-50 flex p-10 space-x-9 '>
        <input
          type="text"
          name="Name"
          value={searchText}
          onChange={(event) => { setSearchText(event.target.value) }}
          onKeyDown={handleKeyDown}
          disabled={false}
          placeholder="Search Books"
          className="bg-gray-200 h-12 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
        <button onClick={handleSubmit} className="w-1/2 h-12 uppercase  tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
      </div>
    </div>
  </>
  )
};
export default Home;