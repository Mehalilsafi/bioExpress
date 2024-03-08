'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function PublicityPage() {
    const [images, setImages] = useState({
        image1: null,
        image2: null,
        image3: null,
    });

    const handleImageChange = (event, imageName) => {
        const file = event.target.files[0];
        if (file) {
            setImages({
                ...images,
                [imageName]: URL.createObjectURL(file),
            });
        }
    };

    return (
        <div className=''>
            <h1 class='text-3xl font-bold mb-5'>Publicities</h1>
            <div className='w-full  grid grid-cols-3 gap-8'>
                <Column
                    title='side bar publicity'
                    imageName='image1'
                    image={images.image1}
                    onChange={handleImageChange}
                />
                <Column
                    title='details page publicity'
                    imageName='image2'
                    image={images.image2}
                    onChange={handleImageChange}
                />
                <Column
                    title='products page publicity'
                    imageName='image3'
                    image={images.image3}
                    onChange={handleImageChange}
                />
            </div>
        </div>
    );
}

function Column({ title, imageName, image, onChange }) {
    return (
        <div className='col-span-1 bg-white p-5 rounded-md'>
            <h2 className='text-lg font-semibold mb-4'>{title}</h2>

            <label
                for='file-input'
                class='sr-only'
            >
                Choose file
            </label>
            <input
                type='file'
                name='file-input'
                id='file-input'
                onChange={(event) => onChange(event, imageName)}
                class='block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400'
            />

            {image && (
                <div className=' h-[600px] relative rounded-md overflow-hidden'>
                    <Image
                        src={image}
                        alt={title}
                        className='mt-4 w-full h-auto'
                        fill={true}
                        objectFit='cover'
                    />
                </div>
            )}
        </div>
    );
}

export default PublicityPage;
