// import Footer from "../components/Footer";
// import SideBar from "../components/SideBar";

// function template(){
// return(<div className='flex bg-slate-700'>
//     <SideBar />
//     <div className="flex-grow">
//         {/* Contents */}
//         <Footer />
//     </div>
// </div>)
// };

// export default template;


import React,{useState,useEffect} from 'react';
import BooksCatalogue from '../components/BooksCatalogue';

function Trying() {
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

    return (
        <div>
            <BooksCatalogue books={Results}/>
        </div>
    );
}

export default Trying;
