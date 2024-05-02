"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function CarouselThumbs({ gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" py-4 w-[450px]">
      <div className="container ">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-96 w-full rounded-lg"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full  w-full items-center justify-center">
                <Image
                  src={image}
                  width={50}
                  height={50}
                  alt="image"
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex flex-col h-full w-full items-center justify-center">
                <Image
                  src={image}
                  width={50}
                  height={50}
                  alt="image"
                  className="block h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
