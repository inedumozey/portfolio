"use client"

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay"
import 'swiper/css/pagination';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/scrollbar';
import { useAppContext } from '../';
import SwiperContent from './SwiperContent';

export default function Swipers() {
    const { utils } = useAppContext()

    return (
        <div className="backdrop-blur-[10px] bg-bgColor/70 lg:w-[45vw] md:w-[50vw] w-[90vw] shadow-lg h-[500px]">
            <Swiper
                className='w-fill h-[450px]'

                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 6000, disableOnInteraction: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                loop={true}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    type: 'bullets'
                }}
                scrollbar={{ draggable: true }}
            >
                {
                    utils.swiper_data?.map((data: any, i: string) => {
                        return (
                            <SwiperSlide key={i}>
                                <SwiperContent data={data} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='button-swiper'>
                <div className='swiper-button-prev' ></div>
                <div className='swiper-pagination'></div>
                <div className='swiper-button-next' ></div>
            </div>
        </div>
    )
}
