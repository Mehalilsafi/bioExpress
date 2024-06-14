// app/seller/orders/page.js

import { getOrders } from './actions/get-orders';

import { redirect } from 'next/navigation';
import { supabaseServerClient } from '@/app/db/supaBaseServer';
import UserCard from '../components/user-card';

async function OrdersPage() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    if (!user) {
        redirect('/signin');
    }

    const orders = await getOrders();

    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-[20%] fixed'>
                    <UserCard />
                </div>
                <div className='flex-1 pl-[20%]'>
                    <div className='p-5'>
                        <h1 className='text-2xl font-semibold leading-tight mb-6'>
                            Seller Orders
                        </h1>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
                                    <thead>
                                        <tr>
                                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                                Order Date
                                            </th>
                                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                                Products
                                            </th>
                                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                                Total Price
                                            </th>
                                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders?.map((order) => (
                                            <tr key={order.id}>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    {new Date(
                                                        order.created_at
                                                    ).toLocaleDateString()}
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <ul>
                                                        {order.products.map(
                                                            (
                                                                product,
                                                                index
                                                            ) => (
                                                                <li key={index}>
                                                                    {
                                                                        product.productName
                                                                    }{' '}
                                                                    - $
                                                                    {
                                                                        product.productPrice
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    $
                                                    {order.products
                                                        .reduce(
                                                            (total, product) =>
                                                                total +
                                                                product.productPrice,
                                                            0
                                                        )
                                                        .toFixed(2)}
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    {order.status}
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
        </div>
    );
}

export default OrdersPage;
