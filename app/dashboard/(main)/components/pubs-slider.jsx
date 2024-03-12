'use client';
import React from 'react';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Ads1 from '@/assets/olive.svg';
import Ads2 from '@/assets/sidebare.svg';

const PubsSlider = () => {
    return (
        <Carousel className='relative rounded-md overflow-hidden' autoPlay infiniteLoop>
            <div className='bg-green-400 h-[500px] flex-1'>
                <Image
                    src={Ads1}
                    alt='slider image'
                    fill={true}
                    objectFit='cover'
                />
                <p className='legend'>product 1</p>
            </div>
            <div>
                <Image
                    src={Ads2}
                    alt='slider image'
                    fill={true}
                    objectFit='cover'
                />
                <p className='legend'>product 2</p>
            </div>
        </Carousel>
    );
};

export default PubsSlider;
