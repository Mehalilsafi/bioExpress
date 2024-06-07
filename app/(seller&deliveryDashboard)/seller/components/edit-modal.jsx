import React from 'react';
import { MdEdit } from 'react-icons/md';
import EditProductForm from './edit-form';

function EditProductButton({ product }) {
    return (
        <div>
            <button
                type='button'
                className='inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-500 mr-2'
                data-hs-overlay={`#hs-edit-product-modal-${product.id}`}
            >
                <MdEdit size={20} />
                <span>Edit</span>
            </button>
            <EditProductForm product={product} />
        </div>
    );
}

export default EditProductButton;
