import Image from 'next/image';
import Logo from '@/assets/logo.svg';

import LogoutButton from '@/app/shared/ui/logoutButton';
import Link from 'next/link';

function UserCard() {
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
            <div className='px-4 py-6 space-y-5'>
                <div className='flex flex-col gap-3'>
                    <Link
                        href={'/seller'}
                        className='p-3 text-center bg-gray-100 rounded-lg'
                    >
                        Products
                    </Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link
                        href={'/seller/orders'}
                        className='p-3 text-center bg-gray-100 rounded-lg'
                    >
                        Orders
                    </Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link
                        href={'/seller/comments'}
                        className='p-3 text-center bg-gray-100 rounded-lg'
                    >
                        Comments
                    </Link>
                </div>
                <LogoutButton />
            </div>
        </div>
    );
}

export default UserCard;
