
import BookImage from '../components/book-store-background.jpg';

function CardComponent(item) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img src={BookImage} alt="Book Cover" className="w-full h-40 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.author}</p>
                <p className="text-gray-500 text-sm mb-2">ISBN: {item.isbn}</p>
                <p className="text-yellow-500 text-sm mb-2">Ratings: {item.ratings}/5</p>
                <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 py-10">
                <button className="tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    View Details
                </button>
            </div>
        </div>
    )
};

export default CardComponent;