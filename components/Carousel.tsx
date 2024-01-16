'use client'

import john3 from '@/public/assets/1time john wick 5 announced 1200.jpg';
import Image from "next/image";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';

export default function Carousel() {
    const [slidesPerView, setSlidesPerView] = useState(2);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 || window.innerWidth > 1024) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        };

        // Initial calculation
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <section className="w-full lg:w-1/2">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={slidesPerView}
                loop={false}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slides">
                        <Image src={john3} alt="pet" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides">
                        <Image src={john3} alt="flixio" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides">
                        <Image src={john3} alt="e-manager" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>

    )
}
