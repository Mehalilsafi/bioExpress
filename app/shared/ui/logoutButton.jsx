'use client';

import logout from '@/app/(auth)/actions/logout';

const { RiLogoutBoxLine } = require('react-icons/ri');

const LogoutButton = () => {
    const handleLogout = async () => {
        
        await logout();
    };

    return (
        <button
            type='button'
            class='py-2 px-4 items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 absolute bottom-5 w-[88%]'
            onClick={handleLogout}
        >
            <div className='w-full flex justify-center gap-1 items-center '>
                <RiLogoutBoxLine size={20} />
                <span className=''>Logout</span>
            </div>
        </button>
    );
};

export default LogoutButton;
