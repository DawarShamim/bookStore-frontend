
import React, { useState } from 'react';
import BookImage from '../components/book-store-background.jpg';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';

function FavBookCard({ item }) {
    return (
        <div
            className=" mx-auto m-5 w-full bg-[#ebedf0] rounded-lg shadow-slate-500 overflow-hidden hover:shadow-slate-100 transition duration-300 focus:outline-none"
            onClick={() => console.log(item.id)}>
            <div className="flex ">
                <div className="w-1/5">
                    <img src={BookImage} alt="Book Cover" className="w-full h-52 object-cover" />
                </div>
                <div className="w-4/5 px-5 py-2 text-left">
                    <div className='flex justify-between'>
                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        {/* Red filled heart */}
                        <div className='text-right cursor-pointer text-red-500'>
                            {React.createElement(AiFillHeart, { size: "30" })}
                        </div>

                        {/* Black outlined heart */}
                        {/* <div className='text-right cursor-pointer text-black'>
                            {React.createElement(AiOutlineHeart, { size: "30" })}
                        </div> */}
                    </div>

                    <p className="text-gray-700 text-base mb-2 ">{item.author}</p>
                    <p className="text-yellow-500 text-sm mb-2">Ratings: {item.ratings}/5</p>
                    <p className="text-gray-700 text-base">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FavBookCard;