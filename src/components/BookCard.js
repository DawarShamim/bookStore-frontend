import React from 'react';
import imageUrl from '../components/book-store-background.jpg';


// const BookCard = ({ title, imageUrl }) => {
const BookCard = ({ result }) => {
    return (
        <div className="relative bg-gray-900 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={imageUrl} alt={result.title} className="w-full h-auto" />
            <div className="rounded-lg shadow-inner absolute bottom-0 left-0 right-0 bg-gradient-to-b from-slate-100 to-slate-100 p-10">
                <h3 className="text-black text-lg font-semibold">{result.title}</h3>
                <h3 className="text-gray-600 text-base font-semibold">By {result.author}</h3>
                
            </div>
        </div>
    );
};

export default BookCard;
