import Image from 'next/image';
import Thanku from '@/assets/thanku.svg';

const ThankuPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        {/* Thank You Picture */}
        <div className=" flex items-center justify-center">
            <Image src={Thanku} alt="Thank You" width={500} height={500} />
        </div>

    
        <div className="mt-2 font-medium text-4xl ">
            <h2>Thanks for signing up!</h2>
        </div>


        <div className="mt-4 text-center text-lg text-[#707070]">
            <p>
            Thank you for submitting your application! Our team will carefully review it, and we will reach out to you via email within [...] with the status of your application.
            </p>
        </div>
        </div>
    );
};

export default ThankuPage;
