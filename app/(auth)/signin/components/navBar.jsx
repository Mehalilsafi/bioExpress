import Logo from '@/assets/logo.svg'; // Adjust the import based on your project structure
import Image from 'next/image';
const NavBar = () => {
    return (
        <div className=" p-4 flex justify-between items-center fixed w-full z-10">
        {/* Left side - Logo */}
        <div className="flex items-center">
            <div className="w-100 h-8 mr-5">

            <Image src={Logo} alt="Logo" />
            </div>
        
        </div>

        {/* Right side - Button */}
        <div>
            <button className="bg-[#bde67c] mr-10 text-black">Sign In</button>
        </div>
        </div>
    );
    };

export default NavBar;
