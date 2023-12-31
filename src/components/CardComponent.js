
import React, { useState } from 'react';
import BookImage from '../components/book-store-background.jpg';
import { useNavigate } from 'react-router-dom';
import BookReview from '../Pages/BookReview';

function CardComponent({ item }) {
  //important
  const navigate =useNavigate();

  const handlePress =(Book)=>{
    navigate("/Bookdetails", { state: { Book } });

  };
  return (

    <button
      className="max-w-md mx-auto bg-[#ebedf0] rounded-lg transform transition-transform hover:scale-105 shadow-slate-500 overflow-hidden cursor-pointer hover:shadow-slate-100 duration-300 focus:outline-none"
      // onClick={() => console.log(item.id)}>
      onClick={() => handlePress(item)}>
      <div className="flex">
        <div className="w-1/3">
          <img src={BookImage} alt="Book Cover" className="w-full h-40 object-cover" />
        </div>
        <div className="w-2/3 px-2 py-2">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base mb-2 ">{item.author}</p>
          <p className="text-yellow-500 text-sm mb-2">Ratings: {item.ratings}/5</p>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
      </div>
    </button>
  );
};

export default CardComponent;