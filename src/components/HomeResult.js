import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import BookImage from '../components/book-store-background.jpg'; // Replace with your book cover image placeholder
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation]);

const SearchResults = ({ results }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >

                {results.map((result, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={BookImage} alt="Book Cover" className="w-full h-40 object-cover" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{result.title}</div>
                                <p className="text-gray-700 text-base">{result.author}</p>
                                <p className="text-gray-500 text-sm mb-2">ISBN: {result.isbn}</p>
                                <p className="text-yellow-500 text-sm mb-2">Ratings: {result.ratings}/5</p>
                                <p className="text-gray-700 text-base">{result.description}</p>
                            </div>
                            <div className="px-6 py-10">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default SearchResults;
