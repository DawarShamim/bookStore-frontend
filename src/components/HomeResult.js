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
                                <button className="tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
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
