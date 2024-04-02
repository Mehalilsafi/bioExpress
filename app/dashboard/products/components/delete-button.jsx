'use client';

import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteProduct } from '../actions/delete-product';

function DeleteButton({ productId }) {
    const handleDelete = async () => {
        await deleteProduct(productId);
    };

    return (
        <div>
            <button
                type='button'
                className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-500 mr-2'
                onClick={handleDelete}
            >
                <MdDelete size={20} />
                <span>Delete</span>
            </button>
        </div>
    );
}

export default DeleteButton;
