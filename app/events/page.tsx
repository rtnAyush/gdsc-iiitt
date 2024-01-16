'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState, useEffect } from 'react';
import john3 from '@/public/assets/1time john wick 5 announced 1200.jpg';
import Image from "next/image";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default async function Page() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
    <>
      <MaxWidthWrapper className="bg-slate-200 relative">
        <section className="py-20 flex flex-col relative gap-16 max-w-6xl m-auto px-3 lg:gap-6 lg:flex-row ">
          <section className="flex flex-col pt-16 gap-4 justify-center sm:w-full lg:w-1/2 md:pt-0">
            <h1 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
              Welcome to the GDSC Events
            </h1>
            <p>
              At GDSC, we believe in fostering a vibrant community of
              developers, learners, and tech enthusiasts. Our events are
              designed to provide you with valuable insights, hands-on
              experience, and networking opportunities to help you grow in the
              world of technology. Check out our upcoming events and join us for
              an unforgettable learning journey!
            </p>
          </section>
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
        </section>
      </MaxWidthWrapper>
    </>
  );
}
