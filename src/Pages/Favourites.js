import FavBookCard from "../components/FavBookCard";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Favourites() {

    const BOOKS = [
        {
            id: 1,
            title: "J.K. Rowling",
            author: "British",
            ratings: 5,
            description: ["Harry Potter series", "The Casual Vacancy"],
        },
        {
            id: 2,
            title: "Stephen King",
            author: "American",
            ratings: 4,
            description: ["The Shining", "It", "The Dark Tower series"],
        },
        {
            id: 3,
            title: "Harper Lee",
            author: "American",
            ratings: 2,
            description: ["To Kill a Mockingbird", "Go Set a Watchman"],
        },
        {
            id: 4,
            title: "George Orwell",
            author: "British",
            ratings: 3,
            deathYear: 1950,
            description: ["1984", "Animal Farm"],
        },
        {
            id: 5,
            title: "Agatha Christie",
            author: "British",
            ratings: 1,
            deathYear: 1976,
            description: ["Murder on the Orient Express", "The Murder of Roger Ackroyd"],
        },
    ];
    return (
        <div className='flex bg-slate-700'>
            <SideBar />
            <div className="flex-grow">
                <div className="m-10 h-5/6">
                    <p>dagdshjg</p>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="grid grid-cols-1 gap-4 text-left">
                            {BOOKS.map((item, index) => (
                                <FavBookCard key={index} item={item} className="m-5" />
                            ))}
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>);
};

export default Favourites;