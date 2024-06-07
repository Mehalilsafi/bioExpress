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
            <div className='px-4 py-6'>
                <div className='flex flex-col gap-3'>
                    <Link
                        href={'/seller'}
                        className='p-3 text-center bg-gray-100 rounded-lg'
                    >
                        Products
                    </Link>
                </div>
                <LogoutButton />
            </div>
        </div>
    );
}

export default UserCard;
