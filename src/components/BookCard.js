import React from 'react';
import imageUrl from '../components/book-store-background.jpg';


// const BookCard = ({ title, imageUrl }) => {
const BookCard = ({ title }) => {
    return (
        <div className="relative bg-gray-900 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default BookCard;
