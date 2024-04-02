'use client';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../../categories/actions/get-categories';
import { deleteImage } from '../actions/delete-image';

import uploadImage from '@/app/hooks/use-upload-image';
import { updateProduct } from '../actions/update-product';

function EditProductForm({ product }) {
    const [productInfo, setProductInfo] = useState(product);
    const [updatedImages, setImages] = useState([]);

    const [categories, setCategories] = useState();

    useEffect(() => {
        (async () => {
            const data = await getCategories();
            setCategories(data);
        })();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductInfo({
            ...productInfo,
            [name]: value,
        });
    };

    const handleImageDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setProductInfo({
            ...productInfo,
            images: [...productInfo.images, ...files],
        });
    };

    const handleImageRemove = (indexToRemove) => {
        const filteredImages = updatedImages.filter(
            (_, index) => index !== indexToRemove
        );
        setImages(filteredImages);
    };

    const handleSaveChanges = async () => {
        console.log(productInfo);
        if (updatedImages.length > 0) {
            const newImages = await Promise.all(
                updatedImages.map(async (el) => {
                    const res = await uploadImage(el);
                    return `https://xjjgfrumxwkrggavbrbc.supabase.co/storage/v1/object/public/productImages/${res.path}`;
                })
            );
            productInfo.images = [...productInfo.images, ...newImages];
        }

        await updateProduct(productInfo);
    };
    const handleDeleteImageFromServer = async (product, imageUrl = '') => {
        await deleteImage(product, imageUrl);
        setProductInfo({
            ...productInfo,
            images: productInfo.images.filter((el) => el != imageUrl),
        });
    };

    return (
        <div
            className='hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none'
            id={`hs-edit-product-modal-${product.id}`}
        >
            <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
                <div className='flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] p-5'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Update Product
                    </h2>
                    <label className='block mb-2'>
                        Name:
                        <input
                            type='text'
                            name='productName'
                            value={productInfo.productName}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <label className='block mb-2'>
                        Price:
                        <input
                            type='text'
                            name='productPrice'
                            value={productInfo.productPrice}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>

                    <label className='block mb-2'>
                        Images:
                        <div className='border-dashed border-2 border-gray-300 p-4 mb-2'>
                            <div
                                className='border-dashed border-2 border-gray-300 p-4 mb-2'
                                onDrop={handleImageDrop}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <p>Drop images here or click to upload</p>
                                <input
                                    type='file'
                                    multiple
                                    accept='image/*'
                                    onChange={(e) => {
                                        setImages([
                                            ...updatedImages,
                                            ...Array.from(e.target.files),
                                        ]);
                                        e.target.value = null;
                                    }}
                                    className='hidden'
                                />
                            </div>
                            <div className=''>
                                <div>
                                    your uploaded images :
                                    <div className='flex gap-3'>
                                        {productInfo.images.map(
                                            (image, index) => (
                                                <div
                                                    className='relative m-2 '
                                                    key={index}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`Product Image ${index}`}
                                                        className='h-24 w-24 object-cover'
                                                    />
                                                    <button
                                                        className='absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm'
                                                        onClick={() => {
                                                            handleDeleteImageFromServer(
                                                                productInfo,
                                                                image
                                                            );
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    {updatedImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className='relative m-2'
                                        >
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`Product Image ${index}`}
                                                className='h-24 w-24 object-cover'
                                            />
                                            <button
                                                onClick={() =>
                                                    handleImageRemove(index)
                                                }
                                                className='absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm'
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </label>

                    <label className='block mb-2'>
                        Category:
                        <select
                            name='category'
                            value={productInfo.category}
                            onChange={handleInputChange}
                            class='py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
                        >
                            <option value=''>Select a category</option>
                            {categories?.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className='block mb-2'>
                        Description:
                        <textarea
                            name='description'
                            value={productInfo.description}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <label className='block mb-2'>
                        Quantity:
                        <input
                            type='text'
                            name='quantity'
                            value={productInfo.quantity}
                            onChange={handleInputChange}
                            className='border-gray-300 border rounded-md p-1 w-full'
                        />
                    </label>
                    <div className='flex justify-end'>
                        <button
                            onClick={handleSaveChanges}
                            className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProductForm;
