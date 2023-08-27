import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import BookImage from '../components/book-store-background.jpg';
import { useState, useEffect } from "react";
import CardComponent from "../components/CardComponent";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useLocation } from "react-router-dom";

function BookReview() {
    const location = useLocation();
    const { Book } = location.state || {};
    console.log(Book)

    const [selectedRating, setSelectedRating] = useState(0);

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const [inputValues, setInputValues] = useState({
        reviewText: ''
    });
    const [isloading, setloading] = useState(false);

    const handleSubmit = () => {
        setloading(true);
        const payload = {
            book: Book.id,
            reviewText: inputValues.reviewText,
            stars: selectedRating
        };
        console.log(payload);
        // important
        // BookReview API here
        setInputValues({
            reviewText: ''
        });
        setSelectedRating(0);
        setloading(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    const [Results, setResults] = useState([]);
    const [Reviews, setReviews] = useState(
        [
            {
                "Client Name": "Emily Smith",
                "Review Text": "This book is an absolute gem! The author's storytelling is captivating, pulling you into a world of wonder and intrigue from the very first page. The characters are so well-developed that you feel like you know them personally. The plot twists kept me on the edge of my seat, and I couldn't put the book down until I reached the satisfying conclusion. Five stars for this masterpiece!",
                "Stars": 5,
                "Created At": "2023-08-15"
            },
            {
                "Client Name": "David Johnson",
                "Review Text": "I have read countless books in this genre, but this one truly stands out. The author's prose is elegant and evocative, painting vivid imagery in my mind with every turn of the page. The intricate plot is brilliantly woven, full of unexpected surprises that had me guessing until the very end. This book is a true work of art, and I can't recommend it enough.",
                "Stars": 5,
                "Created At": "2023-08-18"
            },
            {
                "Client Name": "Sarah Rodriguez",
                "Review Text": "Three stars for this book. While the premise showed promise, I found the execution to be lacking. The pacing was uneven, with moments of intense action followed by long stretches of slow development. The characters felt a bit one-dimensional, and I struggled to connect with their motivations. Despite this, the author's writing style kept me engaged enough to finish the book.",
                "Stars": 3,
                "Created At": "2023-08-22"
            },
            {
                "Client Name": "Michael Chen",
                "Review Text": "A solid four-star read. The world-building in this book is impressive, immersing you in a richly detailed universe that feels both familiar and unique. The character arcs were satisfying to follow, each one undergoing meaningful growth throughout the story. While some plot elements were predictable, the overall journey was enjoyable and well worth the read.",
                "Stars": 4,
                "Created At": "2023-08-25"
            },
            {
                "Client Name": "Jennifer Adams",
                "Review Text": "Unfortunately, I can only give this book two stars. The concept held potential, but the execution left me disappointed. The writing often felt clumsy and repetitive, and the characters' decisions didn't always make sense within the context of the story. The book improved slightly towards the end, but I struggled to stay engaged throughout.",
                "Stars": 2,
                "Created At": "2023-08-27"
            }
        ]);

    const item = {
        id: 1,
        title: "The Great Gatsby",
        author: "F.Scott",
        isbn: 6152371283621,
        ratings: 3.2,
        description: "sadhsdjhsat12361232iqkjjasvc  dautsd siayi",
    };
    useEffect(() => {
        setResults(generateRandomResults(20))
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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    return (
        <div className='flex flex-grow bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="min-h-screen py-12 px-1 flex">
                    <div className="w-3/4 m-5 bg-[#ebedf0]">
                        <div className="w-full">
                            <div className="max-h-full overflow-y-auto h-full divide-y-2 divide-slate-400">
                                <div className="p-5 flex">
                                    <div className="w-1/3 h-full">
                                        <img src={BookImage} alt="Book Cover" className="w-full h-[300px] object-cover" />
                                    </div>
                                    <div className="w-2/3 text-left px-2 py-2">
                                        <div className="font-bold text-3xl mb-2">{Book.title}</div>
                                        <p className="text-gray-700 text-xl mb-2 font-bold">{Book.author}</p>
                                        <p className="text-gray-700 text-base mb-2">Ratings: {Book.ratings}/5</p>
                                        <p className="text-gray-700 text-base mb-2">ISBN: {Book.isbn}</p>
                                        <h3 className="text-gray-700 text-base mb-2">Description</h3>
                                        <p className="text-gray-700 text-xl">{Book.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="font-bold text-2xl mb-2 p-5 text-left" >
                                        User Reviews:
                                    </h1>
                                    <div className="m-5 h-[700px] overflow-scroll">
                                        {Reviews.map((review, index) => (
                                            <div key={index} className="bg-white rounded shadow-md w-full my-4 px-3">
                                                <h2 className="text-xl font-semibold text-left ">{review["Client Name"]}</h2>
                                                <div className="flex items-center mt-2">
                                                    <span className="text-gray-500 ml-1"> Rated: </span>
                                                    <span className="text-yellow-500 flex">
                                                        {Array.from({ length: review["Stars"] }, (_, index) => (
                                                            <AiFillStar
                                                                key={index}
                                                                className="w-5 h-5 fill-current"
                                                            />
                                                        ))}
                                                        {Array.from({ length: (5 - review["Stars"]) }, (_, index) => (
                                                            <AiOutlineStar
                                                                key={index}
                                                                className="w-5 h-5 fill-current"
                                                            />
                                                        ))}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600">{review["Review Text"]}</p>

                                                <p className="text-gray-500 text-sm mt-1">At: {review["Created At"]}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white rounded shadow-md w-full my-5 p-5">
                                        <h2 className="text-xl font-semibold text-left mb-2">Add a Review</h2>
                                        <div className="flex items-center mt-2">
                                            <span className="text-gray-500 ml-1"> Your Rating: </span>
                                            <span className="text-yellow-500 flex">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    index < selectedRating ? (
                                                        <AiFillStar
                                                            key={index}
                                                            className="w-5 h-5 fill-current cursor-pointer"
                                                            onClick={() => handleRatingClick(index + 1)}
                                                        />
                                                    ) : (
                                                        <AiOutlineStar
                                                            key={index}
                                                            className="w-5 h-5 fill-current cursor-pointer"
                                                            onClick={() => handleRatingClick(index + 1)}
                                                        />
                                                    )
                                                ))}
                                            </span>
                                        </div>
                                        <textarea
                                            className="w-full rounded border border-gray-300 p-2 mt-2"
                                            rows="4"
                                            placeholder="Write your review here..."
                                            name="reviewText"
                                            value={inputValues.reviewText}
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyDown}
                                        />
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isloading} // Disable the button while loading
                                            className={`tracking-wider font-bold text-white ${isloading
                                                ? 'bg-gray-300 cursor-not-allowed' // Change button style when loading
                                                : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'
                                                } rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                                        >
                                            {isloading ? 'Loading...' : 'Submit Review'}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 mx-auto sm:px-1 lg:px-2">
                        <div>
                            <h1 className="text-left text-3xl font-semibold text-blue-50 p-5 ">Similar Books</h1>

                            {Results.map((book) => (
                                <CardComponent key={book.id} item={book} />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default BookReview;