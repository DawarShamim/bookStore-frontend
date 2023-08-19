import React from 'react';
import BookImage from '../components/book-store-background.jpg';
import CardComponent from './CardComponent';


const BooksCatalogue = ({ title, books, Invert }) => {
  //   const books = [
  //     { id: 1, title: 'Book 1', imageUrl: BookImage },
  //     { id: 2, title: 'Book 2', imageUrl: BookImage },
  //     // Add more books
  //   ];

  return (
    <div className={Invert ? "bg-black min-h-screen py-12 px-4" : "bg-slate-400 min-h-screen py-12 px-4"}>
      <div className="max-w-screen-xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 text-${Invert ? 'white' : 'black'} text-left`}>
          {title}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {books.map((book) => (
            <CardComponent key={book.id} item={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCatalogue;
