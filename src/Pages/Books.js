import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import BookCardComponent from "../components/BookCardComponent"
import { useState, useEffect } from "react";
import BooksCatalogue from '../components/BooksCatalogue';

function Books() {
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
    return (<div className='flex bg-slate-700'>
        <SideBar />
        <div className="flex-grow">

            <div className="min-h-screen py-12 px-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl text-white font-bold mb-6">Books Catalogue</h1>
                    <div >
                    <BooksCatalogue books={Results}/>
                        {/* New Arrivals */}
                        <div className="bg-white p-4 rounded shadow flex-col">
                            <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>
                            <div className="flex-col">
                            {Results.map((result, index) => (
                                <BookCardComponent key={index} item={result} />
                            ))}
                            </div>
                        </div>

                        {/* Other Categories */}
                        <div className="bg-white p-4 rounded shadow flex-1">
                            <h2 className="text-xl font-semibold mb-4">Other Categories</h2>
                            {/* Display other categories here */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>)
};

export default Books;