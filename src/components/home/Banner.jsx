"use client"
import React from 'react'
import { bannerData } from '../../../data/bannerData';
import Link from 'next/link';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <div className="overflow-hidden relative">
            <Slider {...settings}>
                {
                    bannerData.map(item => (
                        <Link href={item.url} key={item.id}>
                            <Image width={1600} height={600} src={item?.image?.src} alt={`Banner ${item.id}`} className='w-full h-auto' />
                        </Link>
                    ))
                }

            </Slider>
        </div>
    )
}

export default Banner