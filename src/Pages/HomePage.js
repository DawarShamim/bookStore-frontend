import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import HomeResult from '../components/HomeResult';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Footer from '../components/Footer';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [Results, setResults] = useState([]);
  useEffect(() => {
    setResults(generateRandomResults(20));
  }, []);
  // Function to generate random search results
  const generateRandomResults = (count) => {
    const results = [];
    const titles = ['Book Title 1', 'Book Title 2', 'Book Title 3']; // Add more titles
    const authors = ['Author 1', 'Author 2', 'Author 3']; // Add more authors
    const isbns = ['ISBN123456', 'ISBN789012', 'ISBN345678']; // Add more ISBNs

    for (let i = 0; i < count; i++) {
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
      const randomIsbn = isbns[Math.floor(Math.random() * isbns.length)];
      const randomRatings = (Math.random() * 5).toFixed(1); // Generate a random rating between 0 and 5
      const randomDescription = 'Description for ' + randomTitle;

      results.push({
        title: randomTitle,
        author: randomAuthor,
        isbn: randomIsbn,
        ratings: randomRatings,
        description: randomDescription,
      });
    }

    return results;
  };


  const Secondary = Results.slice(0, 6);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (searchText === '') {
      console.log('Errors Caught');
      setResults([]);
    } else {
      console.log('Button Pressed Hit API');
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="m-10 mt-50">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4">Explore a World of Books</h1>
            <p className="text-lg mb-8">Discover our vast collection of Books</p>
            <a
              href="/login"
              className="cursor-pointer bg-white text-blue-600 hover:bg-blue-100 text-sm font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Explore Now
            </a>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-10">
          <div className='p-2'>
            <h2 className="text-2xl font-semibold mb-6 text-white">Featured Books</h2>
          </div>
          <HomeResult results={Results} />
        </section>

        <div className="flex p-10 space-x-9 ">
          <ReactSearchAutocomplete
            items={[
              { id: 0, name: 'Book 1' },
              { id: 1, name: 'Book 2' },
              { id: 2, name: 'Book 3' },
            ]}
            onSelect={(item) => handleSearch(item.name)}
            inputValue={searchText}
            onInput={(event) => setSearchText(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Books"
            className="h-12 rounded px-4 block w-full z-10"
          />
          <button
            onClick={handleSubmit}
            className="w-1/2 h-12 uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Search
          </button>
        </div>
        {(Secondary.length !== 0) && (
          <section className="py-5">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-6 text-white">Search Results</h2>
              {(Results.length >= 6) && (
                <div className='text-1xl font-semibold mb-6 text-white'> Top 6 Most similar Results</div>)}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Repeat this block for each featured book */}
                {Secondary.map((result, index) => (
                  <div className="bg-white shadow-md rounded-lg p-6" key={index}>
                    <div>
                      <img src="book-cover.jpg" alt="Book Cover" className="w-32 h-48 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
                      <p className="text-gray-600 mb-2">{result.author}</p>
                      <p className="text-yellow-500 text-sm mb-2">Ratings: {result.ratings}/5</p>
                      <a to="/book-details" className="text-blue-600 hover:underline cursor-pointer">
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6">
              <a href="/login" className="cursor-pointer bg-white text-blue-600 hover:bg-blue-100 text-sm font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                Show More Results
              </a>
            </div>
          </section>
        )
        }

      </div>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Visit Our Store</h2>
          <p className="text-lg mb-8">Explore our Bookstore locations near you.</p>
          <a href="/login"
            className="cursor-pointer bg-white text-blue-600 hover:bg-blue-100 text-sm font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Find a Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
