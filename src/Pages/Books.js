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
        const isbns = ['12312312312456', '78912121312012', '12312312312312']; // Add more ISBNs

        for (let i = 0; i < count; i++) {
            const randomTitle = titles[Math.floor(Math.random() * titles.length)];
            const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
            const randomIsbn = isbns[Math.floor(Math.random() * isbns.length)];
            const randomRatings = (Math.random() * 5).toFixed(1); // Generate a random rating between 0 and 5
            const randomDescription = 'Description for ' + randomTitle;

            results.push({
                id: i,
                title: randomTitle,
                author: randomAuthor,
                isbn: randomIsbn,
                ratings: randomRatings,
                description: randomDescription,
            });
        }

        return results;
    };
    
    // const results =BookCatalogueService();
    // setResults(results);
    return (
        <div className='flex flex-grow bg-slate-700'>
        {/* <div className=""> */}
            <SideBar />
        {/* </div>  */}
            <div className="flex-grow">
                <div className="min-h-screen py-12 px-1">
                    <div className="max-w-full mx-auto sm:px-1 lg:px-2">
                        <div >
                            <BooksCatalogue title={"Most Popular Books"} books={Results} Invert={true} />
                            <BooksCatalogue title={"New Arrivals"} books={Results} Invert={false} />
                            <BooksCatalogue title={"For Kids"} books={Results} Invert={true} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default Books;