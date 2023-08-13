import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Trying() {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const delay = 2000;
        const debounce = setTimeout(() => {
            handleSubmit();
        }, delay);
        return () => {
            clearTimeout(debounce);
        };
    }, [searchText]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (searchText === "") {
            console.log("Errors Caught");
        } else {
            console.log("Button Pressed Hit API");
        }
    };

    const handleSearch = (value) => {
        setSearchText(value);
    };

    return (
        <div className='my-9 flex-col'>
            <Navbar />
            <div className='mt-50 flex p-10 space-x-9 '>
                <ReactSearchAutocomplete
                // Important 
                // Needed to be updated
                    items={[
                        { id: 0, name: 'Book 1' },
                        { id: 1, name: 'Book 2' },
                        { id: 2, name: 'Book 3' },
                        // Add more items here
                    ]}
                    onSelect={(item) => handleSearch(item.name)}
                    // Use 'inputValue' instead of 'value'
                    inputValue={searchText}
                    onInput={(event) => setSearchText(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search Books"
                    className=" h-12   rounded px-4 block w-full"
                />
                <button onClick={handleSubmit} className="w-1/2 h-12 uppercase  tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Search
                </button>
            </div>

            <div className='m-10'>
                <span>dawar</span>
            </div>
        </div>
    );
}

export default Trying;
