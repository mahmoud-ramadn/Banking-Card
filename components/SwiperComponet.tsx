'use client';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Images (لازم يكونوا داخل /public)
import imageOne from '@/public/swiper-one (1).png';
import imageTwo from '@/public/swiper-one (2).png';
import imageThree from '@/public/swiper-one (3).png';

const images = [imageOne, imageTwo,imageThree ,imageThree];

export default function SwiperComponent() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative container pb-10 z-[50]">
      <Swiper
      grabCursor
      resistanceRatio={0.85}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1.1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="pl-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <Image src={image} alt="office" className="rounded-xl object-cover" priority />

              {/* Glass Effect */}
              <div className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl border border-white/20 bg-white/15 p-6 shadow-2xl backdrop-blur-lg">
                <p className="text-sm text-white">Glass overlay content</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
