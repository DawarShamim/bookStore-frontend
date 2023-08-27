import React from 'react';
import BookImage from '../components/book-store-background.jpg';
import CardComponent from './CardComponent';


const BooksCatalogue = ({ title, books, Invert }) => {

  return (
    <div className={Invert ? `bg-[#0e0e0e] min-h-screen py-12 px-6` : "bg-[#b5bcc9] min-h-screen py-12 px-6"}>
      <div className="max-w-full mx-auto">
        <h1 className={`text-3xl font-bold mb-6 text-${Invert ? 'white' : 'black'} text-left`}>
          {title}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  gap-3 xl:grid-cols-4">
          {books.map((book) => (
            <CardComponent key={book.id} item={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCatalogue;
