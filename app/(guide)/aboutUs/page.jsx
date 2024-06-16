    import Image from 'next/image';
    import Logo from '@/assets/aboutus.svg';

    const AboutUs = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-[#d7e9bc] p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h1 className="text-xl md:text-3xl font-bold text-black mb-4">About Us</h1>
                <p className="text-black text-xm md:text-sm leading-tight">
                Bio Express is a premier e-commerce platform dedicated to offering a wide range of organic and eco-friendly products. Our mission is to promote healthy living and sustainability by providing high-quality bio products, from fresh produce to eco-conscious household items. We work directly with trusted organic farmers and manufacturers to ensure that every product meets our rigorous standards for quality and environmental responsibility. At Bio Express, we are committed to making it easy for you to lead a healthier, greener lifestyle. Join us in our journey towards a more sustainable future.
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Image src={Logo} alt="Logo" width={500} height={500} className="rounded-lg" />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default AboutUs;
