import Image from 'next/image';
import Thanku from '@/assets/thanku.svg';

const ThankuPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        {/* Thank You Picture */}
        <div className="w-300 h-300 flex items-center justify-center">
            <Image src={Thanku} alt="Thank You" />
        </div>

        {/* Thank You Message */}
        <div className="mt-4 font-bold">
            <h2>Thanks for signing up!</h2>
        </div>

        {/* Paragraph */}
        <div className="mt-2 break-words text-center">
            <p>
            Thank you for submitting your application! Our team will carefully review it, and we will reach out to you via email within [...] with the status of your application.
            </p>
        </div>
        </div>
    );
};

export default ThankuPage;
