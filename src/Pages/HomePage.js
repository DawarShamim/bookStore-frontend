import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import HomeResult from '../components/HomeResult';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Home() {
  const [Results, setResults] = useState('');
  //  Important to be removed
  useEffect(() => {
    setResults(generateRandomResults(20));
  }, []);

  // Function to generate random search results
  const generateRandomResults = (count) => {
    const results = [];
    const titles = ['Book Title 1', 'Book Title 2', 'Book Title 3', /* Add more titles */];
    const authors = ['Author 1', 'Author 2', 'Author 3', /* Add more authors */];
    const isbns = ['ISBN123456', 'ISBN789012', 'ISBN345678', /* Add more ISBNs */];

    for (let i = 0; i < count; i++) {
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
      const randomIsbn = isbns[Math.floor(Math.random() * isbns.length)];
      const randomRatings = Math.random() * 5; // Generate a random rating between 0 and 5
      const randomDescription = 'Description for ' + randomTitle;

      results.push({
        title: randomTitle,
        author: randomAuthor,
        isbn: randomIsbn,
        ratings: randomRatings.toFixed(1),
        description: randomDescription,
      });
    }

    return results;
  };



  // above code
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const delay = 2000;
    const debounce = setTimeout(() => {
      if (searchText !== "") {
        handleSubmit();
      }
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
      setResults('');
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
          className=" h-12 rounded px-4 block w-full"
        />
        <button onClick={() => { handleSubmit() }} className="w-1/2 h-12 uppercase  tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Search
        </button>
      </div>

      <div className='m-10'>
        {Results && (
          <HomeResult results={Results} />)}
      </div>
    </div>
  )
};
export default Home;

