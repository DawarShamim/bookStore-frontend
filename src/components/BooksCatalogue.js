import React from 'react';
import BookCard from './BookCard';
import BookImage from '../components/book-store-background.jpg';


const BooksCatalogue = ({books}) => {
//   const books = [
//     { id: 1, title: 'Book 1', imageUrl: BookImage },
//     { id: 2, title: 'Book 2', imageUrl: BookImage },
//     // Add more books
//   ];

  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Books Catalogue</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} title={book.title} imageUrl={book.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCatalogue;
