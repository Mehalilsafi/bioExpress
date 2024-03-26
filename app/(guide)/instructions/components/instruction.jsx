import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Intr1 from '@/assets/inst1.svg';
import Intr2 from '@/assets/inst2.svg';
import Intr3 from '@/assets/inst3.svg';

const InstructionsPage = () => {
    return (
        <div className="h-screen">
            <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                <div className="text-center mb-8">
                    <h1 className="text-xl font-medium mb-4">Become a Seller</h1>
                    <p className="text-[#707070]"> 
                        Empower your bio-products journey by joining Bio Express 
                        where sellers thrive! Unlock a global marketplace for your 
                        sustainable offerings and connect with like-minded consumers.
                    </p>
                </div>


                <div className="flex items-center justify-center mb-8">
                    <Image src={Intr1} alt="SVG Picture" width={500} height={500} />
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-medium mb-4">How to Join Us?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="text-center">
                            <h3 className="text-xl font-medium mb-2">
                                <span className="text-[#A4CE4A] font-bold text-3xl">#1</span> Apply to our form
                            </h3>
                            <p className='text-[#707070]'>
                                Take the first step towards showcasing your bio-products!
                                Apply to our form and set the stage for success.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image src={Intr2} alt="SVG Picture" width={300} height={300} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-center">
                            <Image src={Intr3} alt="SVG Picture" width={300} height={300} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-medium mb-2">
                                <span className="text-[#A4CE4A] font-bold text-3xl">#2</span> Email Confirmation
                            </h3>
                            <p className='text-[#707070]'>
                                Ready to make a mark? Set your information and watch your seller profile come to life on Bio Express, and wait for us to contact you via email. – where your story matters.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/signup/signupSeller">
                        <button className="px-10 py-4 bg-[#C5DCA0] rounded-md text-2xl font-medium hover:bg-gray-200">Join</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InstructionsPage;
