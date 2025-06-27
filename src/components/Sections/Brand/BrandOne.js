'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png"
]

export default function BrandOne({ classname }) {
  return (
    <section className={`section-brand ${classname}`}>
      <div className="container">
        <h5 className="heading5 text-center">Trusted by specialists all around the world</h5>
        <div className="flex items-center justify-center mt-7">
          <div className="list lg:w-11/12 w-full">
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              className='h-full relative style-border'
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <Link href={'#!'} scroll={false} className="brand-item flex items-center justify-center">
                    <Image width={4000} height={3000} src={logo} alt="1" className="lg:h-[44px] h-9 w-auto" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
