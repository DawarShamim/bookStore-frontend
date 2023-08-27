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
import CardComponent from './CardComponent';
import BookCard from './BookCard';
SwiperCore.use([Navigation]);

const SearchResults = ({ results }) => {
    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true,bulletActiveClass: 'pagination-active'}}
            scrollbar={{ draggable: true }}
            className='cursor-pointer'
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {results.map((result, index) => (
                <div className="mb-10">
                    <SwiperSlide key={index}>
                        {/* <CardComponent item={result}> */}
                        <BookCard result={result} />
                        {/* </CardComponent> */}

                    </SwiperSlide>
                </div>
            ))}
        </Swiper>

    );
};

export default SearchResults;
