// 'use client';

import NewProductModal from './product-modal';

import { getProducts } from '../actions/get-products';

import EditProductButton from './edit-modal';
import DeleteButton from './delete-button';

async function ProductsTable() {
    const products = await getProducts();

    // Sample products data

    return (
        <div>
            <div className='flex flex-col'>
                <div className='-m-1.5 overflow-x-auto'>
                    <div className='p-1.5 min-w-full inline-block align-middle'>
                        <div className='border rounded-lg overflow-hidden dark:border-gray-700'>
                            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white'>
                                <thead>
                                    <tr>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Product Name
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Price
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Image
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Category
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Description
                                        </th>
                                        <th className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'>
                                            Quantity
                                        </th>
                                        <th className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'>
                                            <button
                                                type='button'
                                                className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none bg-[#A4CE4A] text-black'
                                                data-hs-overlay='#hs-product-modal'
                                            >
                                                new product
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                                    {products?.map((product) => (
                                        <tr key={product.id}>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.productName}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.productPrice}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.images?.map(
                                                    (el, index) => (
                                                        <img
                                                            key={index}
                                                            src={el}
                                                            className='h-12 w-12'
                                                        />
                                                    )
                                                )}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {
                                                    product.categories
                                                        .categoryName
                                                }
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.description}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                {product.quantity}
                                            </td>
                                            <td className='flex gap-3 items-center'>
                                                <EditProductButton
                                                    product={product}
                                                />
                                                <DeleteButton
                                                    productId={product.id}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <NewProductModal />
        </div>
    );
}

export default ProductsTable;
