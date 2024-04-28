import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

import LogoutButton from '@/app/shared/ui/logoutButton';

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

                <LogoutButton />
            </div>
        </div>
    );
}

export default UserCard;
