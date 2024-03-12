import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

import { RiLogoutBoxLine } from 'react-icons/ri';

function UserCard() {
    const fullName = 'John Doe';
    const email = 'john.doe@example.com';
    const phoneNumber = '+1234567890';
    const location = 'New York, USA';
    const brandName = 'Example Brand';

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg overflow-hidden h-screen relative'>
            <div class='flex items-center justify-center'>
                {/* Logo here */}
                <Image
                    src={Logo}
                    width={150}
                    alt='logo'
                />
            </div>
            <div className='px-4 py-6'>
                <div className=''>
                    <div className='rounded-full bg-gray-200 flex items-center justify-center w-full'>
                        <MdAccountCircle size={50} />
                        <span>{fullName}</span>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='flex items-center mt-2 text-gray-600'>
                        <MdEmail className='mr-2' />
                        <p>{email}</p>
                    </div>
                    <div className='flex items-center mt-1 text-gray-600'>
                        <MdPhone className='mr-2' />
                        <p>{phoneNumber}</p>
                    </div>
                    <div className='flex items-center mt-1 text-gray-600'>
                        <MdLocationOn className='mr-2' />
                        <p>{location}</p>
                    </div>
                    <div className='mt-4 text-sm text-gray-600'>
                        <p>Brand: {brandName}</p>
                    </div>
                </div>

                <button
                    type='button'
                    class='py-2 px-4 items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 absolute bottom-5 w-[88%]'
                >
                    <div className='w-full flex justify-center gap-1 items-center '>
                        <RiLogoutBoxLine size={20} />
                        <span className=''>Logout</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default UserCard;
