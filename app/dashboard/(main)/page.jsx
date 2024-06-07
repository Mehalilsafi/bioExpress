import React from 'react';
import Cards from './components/stat-card';
import PubsSlider from './components/pubs-slider';
import OrdersChart from './components/orders-chart';

function page() {
    return (
        <div className='flex h-screen flex-col'>
            <Cards />
            {/*  */}
            <div className='h-[400px] mt-10 flex'>
                <div className='flex-1 h-[400px]'>
                    <OrdersChart />
                </div>
                <div className='w-[40%]'>
                    <PubsSlider />
                </div>
            </div>
        </div>
    );
}

export default page;
