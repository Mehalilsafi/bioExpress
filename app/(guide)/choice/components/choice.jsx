import Image from 'next/image';
import Delivery from '@/assets/delivery.svg';
import Seller from '@/assets/seller.svg';

const Choice = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center justify-center h-screen">

        <div className="flex flex-col items-center justify-center">
            <button className="py-2 px-4 bg-[#C5DCA0] text-black rounded-md mb-4">
            Become a Delivery
            </button>
            <div className="w-500 h-500">
            <Image src={Delivery} alt="Left SVG" layout="responsive" width={64} height={64} />
            </div>
        </div>

    
        <div className="flex flex-col items-center justify-center">
            <button className="py-2 px-4 bg-[#C5DCA0] text-black rounded-md mb-4">
            Become a Seller
            </button>
            <div className="w-500 h-500">
            <Image src={Seller} alt="Right SVG" layout="responsive" width={64} height={64} />
            </div>
        </div>
        </div>
    );
};

export default Choice;
