import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CountUpContent from '../common/counter/CountUpContent';
import thumbOne from "./Photos/slider-01-cp.jpg"
import thumbTow from "./Photos/slider-02.jpg"
import thumbThree from "./Photos/slider-03-cp.jpg"
import Image from 'next/image';

const HeroSlider = () => {
    return (
        <div className="bd-banner__right p-relative z-index-1 mb-60">
            <div className="bd-banner__active  swiper-container">
                <div className="swiper-wrappers">
                    <Swiper
                        modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        effect={"fade"}
                        slidesPerView={1}
                        
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            clickable: true,
                            el: '.bd-banner-pagination',
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <div className="bd-banner__image-2">
                                    <Image src={thumbOne} alt="banner-img" width={600} height={750} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="bd-banner__image-2">
                                    <Image src={thumbTow} alt="banner-img" width={600} height={750} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="bd-banner__image-2">
                                    <Image src={thumbThree} alt="banner-img" width={600} height={750} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="bd-banner__shape">
               
                <span className="counter"><CountUpContent number={20} text="" /></span>
                <span className="bd-banner__shape-line"></span>
                <p>de ani de activitate<br /></p>
            </div>
            <div className="bd-banner-pagination banner-pagination-1"></div>
        </div>
    );
};

export default HeroSlider;