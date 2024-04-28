'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import uploadImage from '@/app/hooks/use-upload-image';
import { getPublicities } from './actions/get-pub';
import { addPublicity } from './actions/add-pub';

function PublicityPage() {
    const [pubs, setPubs] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getPublicities();
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            setPubs(data);
        })();
    }, []);

    const handleImageChange = async (event, imageName) => {
        const file = event.target.files[0];
        if (file) {
            const renamedFile = new File([file], imageName, {
                type: file.type,
            });
            // setImages({
            //     ...images,
            //     [imageName]: URL.createObjectURL(renamedFile),
            // });
            const res = await uploadImage(renamedFile);

            const data = {
                imageUrl: `https://xjjgfrumxwkrggavbrbc.supabase.co/storage/v1/object/public/productImages/${res.path}`,
                page: imageName,
            };
            await addPublicity(data);
        }
    };

    return (
        <div className=''>
            <h1 class='text-3xl font-bold mb-5'>Publicities</h1>

            <div className='w-full  grid grid-cols-3 gap-8'>
                <Column
                    title='side bar publicity'
                    imageName='side_bar_publicity'
                    image={
                        pubs?.length &&
                        (pubs?.filter(
                            (el) => el.page === 'side_bar_publicity'
                        ))[0].imageUrl
                    }
                    onChange={handleImageChange}
                />
                <Column
                    title='details page publicity'
                    imageName='details_page_publicity'
                    image={
                        pubs?.length &&
                        (pubs?.filter(
                            (el) => el.page === 'details_page_publicity'
                        ))[0].imageUrl
                    }
                    onChange={handleImageChange}
                />

                <Column
                    title='products page publicity'
                    imageName='products_page_publicity'
                    image={
                        pubs?.length &&
                        (pubs?.filter(
                            (el) => el.page === 'products_page_publicity'
                        ))[0].imageUrl
                    }
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
