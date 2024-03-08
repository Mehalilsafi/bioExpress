import React from 'react';
import SideBar from './components/SideBar';

function layout({ children }) {
    return (
        <div>
            <div className='fixed h-screen w-64'>
                <SideBar />
            </div>
            <div className='pl-64'>
                <div className='p-5'>{children}</div>
            </div>
        </div>
    );
}

export default layout;
