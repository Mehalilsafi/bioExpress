'use client';
import Link from 'next/link';

const NavItem = ({ href, icon, text, isActive }) => {
    return (
        <>
            <Link
                href={href}
                className={`flex items-center px-4 py-2 rounded-md ${
                    isActive
                        ? 'bg-[--main-color] text-black'
                        : 'text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'
                }`}
            >
                <span>{icon}</span>
                <span className='ml-2'>{text} {isActive}</span>
            </Link>
        </>
    );
};

export default NavItem;
