import React from 'react';
import NewCategoryModal from './new-category-modal';
import { MdOutlineDelete } from 'react-icons/md';
import { getCategories } from '../actions/get-categories';
import DeleteCategory from './delete-category';
async function CategoriesTable() {
    const categories = await getCategories();
    return (
        <div>
            <div class='flex flex-col '>
                <div class='-m-1.5 overflow-x-auto '>
                    <div class='p-1.5 min-w-full inline-block align-middle'>
                        <div class='border rounded-lg overflow-hidden dark:border-gray-700'>
                            <table class='min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            class='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                                        >
                                            Category Name
                                        </th>

                                        <th
                                            scope='col'
                                            class='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'
                                        >
                                            <button
                                                type='button'
                                                class='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#A4CE4A] disabled:opacity-50 disabled:pointer-events-none text-black'
                                                data-hs-overlay='#hs-slide-down-animation-modal'
                                            >
                                                New Category
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class='divide-y divide-gray-200 dark:divide-gray-700'>
                                    {categories?.map((el) => {
                                        return (
                                            <tr key={el.id}>
                                                <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                                                    {el.categoryName}
                                                </td>

                                                <td class='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                                    <DeleteCategory
                                                        categoryId={el.id}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <NewCategoryModal />
        </div>
    );
}

export default CategoriesTable;
