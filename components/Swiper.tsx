"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Card from './Card';
import feauredList from './fetauredList';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {feauredList.map((itm:any)=>(
        <SwiperSlide key={itm.id}><Card name={itm.name} price={itm.price} img={itm.img} id={itm.id}/></SwiperSlide>
      ))}
    </Swiper>
  );
};