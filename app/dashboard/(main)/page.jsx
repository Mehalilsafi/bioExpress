import React from 'react';
import Cards from './components/stat-card';
import PubsSlider from './components/pubs-slider';

function page() {
    return (
        <div className='flex h-screen flex-col'>
            <Cards />
            {/*  */}
            <div className='h-[400px] mt-10'>
                <PubsSlider />
            </div>
        </div>
    );
}

export default page;
