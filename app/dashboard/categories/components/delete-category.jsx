'use client';
import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { deleteCategory } from '../actions/delete-categories';

function DeleteCategory({ categoryId }) {
    const handleDelete = async () => {
        await deleteCategory(categoryId);
    };

    return (
        <button
            type='button'
            class='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-500'
            onClick={handleDelete}
        >
            <MdOutlineDelete size={20} />
            <span>Delete</span>
        </button>
    );
}

export default DeleteCategory;
