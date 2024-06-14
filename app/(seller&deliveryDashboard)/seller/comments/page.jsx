// app/seller/comments/page.js

import { redirect } from 'next/navigation';
import { supabaseServerClient } from '@/app/db/supaBaseServer';
import UserCard from '../components/user-card';
import { revalidatePath } from 'next/cache';
import { getComments } from './actions/get-comments';
import { deleteComment } from './actions/delete-comment';

async function CommentsPage() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    if (!user) {
        redirect('/signin');
    }

    const comments = await getComments();

    async function handleDeleteComment(formData) {
        'use server';
        const commentId = formData.get('commentId');
        const success = await deleteComment(commentId);
        if (success) {
            revalidatePath('/seller/comments');
        }
    }

    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-[20%] fixed'>
                    <UserCard />
                </div>
                <div className='flex-1 pl-[20%]'>
                    <div className='p-5'>
                        <h1 className='text-2xl font-semibold leading-tight mb-6'>
                            Product Comments
                        </h1>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white'>
                                <thead className='bg-gray-800 text-white'>
                                    <tr>
                                        <th className='w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm'>
                                            Product
                                        </th>
                                        <th className='w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm'>
                                            Comment
                                        </th>
                                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
                                            Date
                                        </th>
                                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='text-gray-700'>
                                    {comments?.map((comment) => (
                                        <tr key={comment.id}>
                                            <td className='w-1/4 text-left py-3 px-4'>
                                                <div className='flex items-center'>
                                                    <div className='mr-3'>
                                                        <img
                                                            className='h-12 w-12 object-cover rounded-full'
                                                            src={
                                                                comment.products
                                                                    .images[0]
                                                            }
                                                            alt={
                                                                comment.products
                                                                    .productName
                                                            }
                                                        />
                                                    </div>
                                                    <span className='font-medium'>
                                                        {
                                                            comment.products
                                                                .productName
                                                        }
                                                    </span>
                                                </div>
                                            </td>
                                            <td className='w-1/4 text-left py-3 px-4'>
                                                {comment.descreption}
                                            </td>
                                            <td className='text-left py-3 px-4'>
                                                {new Date(
                                                    comment.created_at
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className='text-left py-3 px-4'>
                                                <form
                                                    action={handleDeleteComment}
                                                >
                                                    <input
                                                        type='hidden'
                                                        name='commentId'
                                                        value={comment.id}
                                                    />
                                                    <button
                                                        type='submit'
                                                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'
                                                    >
                                                        Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentsPage;
