import { useState } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import TableLayout from "../components/TableLayout";
import AuthorDescriptionBox from "../components/AuthorDescriptionBox";

function Authors() {

    const [Descriptionbox, setDescriptionbox] = useState(false);
    const [AuthorDetails, setAuthorDetails] = useState('');

    const Keys = ["name", "nationality", "birthYear", "notableWorks"];
    const authors = [
        {
            id: 1,
            name: "J.K. Rowling",
            nationality: "British",
            birthYear: 1965,
            notableWorks: ["Harry Potter series", "The Casual Vacancy"],
        },
        {
            id: 2,
            name: "Stephen King",
            nationality: "American",
            birthYear: 1947,
            notableWorks: ["The Shining", "It", "The Dark Tower series"],
        },
        {
            id: 3,
            name: "Harper Lee",
            nationality: "American",
            birthYear: 1926,
            notableWorks: ["To Kill a Mockingbird", "Go Set a Watchman"],
        },
        {
            id: 4,
            name: "George Orwell",
            nationality: "British",
            birthYear: 1903,
            deathYear: 1950,
            notableWorks: ["1984", "Animal Farm"],
        },
        {
            id: 5,
            name: "Agatha Christie",
            nationality: "British",
            birthYear: 1890,
            deathYear: 1976,
            notableWorks: ["Murder on the Orient Express", "The Murder of Roger Ackroyd"],
        },
    ];

    const openDescriptionBox = (author) => {
        setDescriptionbox(true);
        setAuthorDetails(author);
    };

    const closeDescriptionBox = () => {
        setDescriptionbox(false);
    };
    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="m-20 h-4/6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>

                                    <th scope="col" className="px-6 py-3 uppercase">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Nationality
                                            <a href="#">
                                                <svg
                                                    className="w-3 h-3 ml-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Birth year
                                            <a href="#">
                                                <svg
                                                    className="w-3 h-3 ml-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Books
                                            <a href="#">
                                                <svg
                                                    className="w-3 h-3 ml-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <TableLayout keys={Keys} Data={authors} openDescriptionBox={openDescriptionBox} />
                        </table>
                        {Descriptionbox && (
                            <div className="w-3/4 p-2 border-l-2 text-sm text-gray-700 bg-gray-200 ">
                                <AuthorDescriptionBox Author={AuthorDetails} closeDescriptionBox={closeDescriptionBox} />
                            </div>)}
                    </div>

                </div>
                <Footer />
            </div>
        </div>)
};

export default Authors;