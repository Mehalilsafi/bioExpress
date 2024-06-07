'use client';

import { redirect, usePathname } from 'next/navigation';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiProductHuntLine } from 'react-icons/ri';
import { AiOutlineNotification } from 'react-icons/ai';
import NavItem from './NavItem';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineCategory } from 'react-icons/md';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { supabase } from '@/app/db/supabase';
import logout from '@/app/(auth)/actions/logout';

const SideBar = () => {
    const pathname = usePathname();

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-1 overflow-y-auto shadow bg-white'>
                <div className='flex items-center justify-center'>
                    {/* Logo here */}
                    <Image
                        src={Logo}
                        width={150}
                        height={200}
                        alt='logo'
                    />
                </div>

                <nav className='px-4 py-8 mt-[-30px] flex flex-col'>
                    <ul className='space-y-2'>
                        <NavItem
                            href='/dashboard'
                            icon={<LuLayoutDashboard className='w-5 h-5' />}
                            text='Dashboard'
                            isActive={pathname === '/dashboard'}
                        />
                        <NavItem
                            href='/dashboard/categories'
                            icon={<MdOutlineCategory className='w-5 h-5' />}
                            text='Categories'
                            isActive={pathname === '/dashboard/categories'}
                        />
                        <NavItem
                            href='/dashboard/sellers'
                            icon={<IoPersonCircleOutline className='w-5 h-5' />}
                            text='Sellers'
                            isActive={pathname === '/dashboard/sellers'}
                        />
                        <NavItem
                            href='/dashboard/delivery'
                            icon={
                                <MdOutlineDeliveryDining className='w-5 h-5' />
                            }
                            text='Delivery Boys'
                            isActive={pathname === '/dashboard/delivery'}
                        />
                        <NavItem
                            href='/dashboard/products'
                            icon={<RiProductHuntLine className='w-5 h-5' />}
                            text='Products'
                            isActive={pathname === '/dashboard/products'}
                        />
                        <NavItem
                            href='/dashboard/orders'
                            icon={<RiProductHuntLine className='w-5 h-5' />}
                            text='Orders'
                            isActive={pathname === '/dashboard/orders'}
                        />
                        <NavItem
                            href='/dashboard/publicity'
                            icon={<AiOutlineNotification className='w-5 h-5' />}
                            text='Publicity'
                            isActive={pathname === '/dashboard/publicity'}
                        />
                    </ul>
                    <div className='absolute bottom-5 w-[90%]'>
                        <button
                            type='button'
                            class='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-[95%] '
                            onClick={async () => {
                                await logout();
                            }}
                        >
                            <div className='w-full flex justify-center gap-1 items-center'>
                                <RiLogoutBoxLine size={20} />
                                <span className=''>Logout</span>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
