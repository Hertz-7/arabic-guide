import './testimonials.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CommentCard from '../commentcard/commentcard.js';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Ticon from './ticon.jpeg';
function App() {
  return (
    <>
        <div className="bodystu" >
            <p className='pstu' >Student testimonials</p>
            <h2 className='tagstu'>What they are saying ?</h2>
        </div>
        <div className='tcarousel'>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={3}
          
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='swiper-container'
            >
            <SwiperSlide className='cmtslide'><CommentCard icon={Ticon} /></SwiperSlide>
            <SwiperSlide className='cmtslide'><CommentCard icon={Ticon} /></SwiperSlide>
            <SwiperSlide className='cmtslide'><CommentCard icon={Ticon} /></SwiperSlide>
            <SwiperSlide className='cmtslide'><CommentCard icon={Ticon} /></SwiperSlide>
            
            <SwiperSlide className='cmtslide'><CommentCard icon={Ticon} /></SwiperSlide>
            
            <SwiperSlide className='cmtslide'><CommentCard icon={Ticon} /></SwiperSlide>
        
            </Swiper>
        {/* <div id="carouselExample" className="comments carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active"> 
                    <div className='singleslide'>
                                
                    <div><CommentCard icon={Ticon} /></div>
                                
                    <div><CommentCard icon={Ticon} /></div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='singleslide'>
                                    
                    <div><CommentCard icon={Ticon} /></div>
                                                
                    <div><CommentCard icon={Ticon} /></div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='singleslide'>
                                    
                    <div><CommentCard icon={Ticon} /></div>
                                                                
                    <div><CommentCard icon={Ticon} /></div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}

      
        </div>
        
     
        
    </>
  );
}

export default App;




