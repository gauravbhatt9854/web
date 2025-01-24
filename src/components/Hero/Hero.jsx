import React, { useState, useEffect } from 'react';
import { HeroPic } from './../../assets/assets';
const Hero = () => {
    // animation logic
    const [currentIndex, setCurrentIndex] = useState(0);
    const buttonColors = [
        ['bg-apple-red', 'bg-c-brown'],
        ['bg-c-blue', 'bg-c-pel-blue']
    ];

    // Change the image every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroPic.length);
        }, 2000); //

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // code for changing text 
    const texts = [['You can trust our service', 'Your Success, Our Goal.'], ['Start Free, Grow Big.', 'Opportunities for Everyone'], ['Connect. Trust. Thrive.', 'Freelance Simplified.'], ['From Start to Success.', 'Unlock Your Potential']]
    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-c-white to-c-pel-blue/100 bg-[length:200%_200%] animate-slow-gradient justify-between mt-4 w-full md:h-[81svh] custom:h-svh rounded-lg">
            {/* right part */}
            <div className="ml-[3rem]  md:w-[70%] lg:w-[79%] md:h-full gap-8 flex flex-col items-center md:items-start">
                <h1 className="mt-[5rem] text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-gray-800">Work <span className="text-blue-500">Hive</span>: Building connections and trust affordably, in the world of freelancing.</h1>
                <p className="mt-4 text-lg text-gray-600">Welcome to WorkHive! It is a free platform empowering freelancers at all levels, from beginners to experts, to grow and succeed.</p>
                <a href="#" className="inline-block ml-0 w-[12.5rem] md:w-[15rem] mt-6 bg-white text-black px-4 py-3 rounded-lg border-2 border-black font-bold mb-8 font-inter text-xs md:text-sm text-center">Start Your Journey, It&#39;s Free!</a>
            </div>

            {/* left part */}
            <div className="md:h-full md:w-[35%] lg:w-[32%] lg:h-full w-full lg:right-0 relative bottom-0 mr-[5rem] flex flex-col justify-end">

                <div className="flex flex-col mt-[1.5rem] w-full h-[7rem] gap-5 justify-center items-center">
                    <div
                        className={`${buttonColors[currentIndex % 2][0]} text-white text-xs px-2 py-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-[11rem] relative md:left-[0rem] left-[-5rem] transition-colors duration-500`}
                    >
                        {texts[currentIndex][0]}
                    </div>
                    <div
                        className={`${buttonColors[currentIndex % 2][1]} text-white text-xs px-2 py-3 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-[11rem] relative md:right-[-5.5rem] right-[-1.5rem] transition-colors duration-500`}
                    >
                        {texts[currentIndex][1]}
                    </div>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <img
                        src={HeroPic[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="md:w-full md:h-[18rem] lg:w-[100%] lg:h-[22rem] rounded w-[44%] h-[21rem] mx-auto transition-transform duration-500"
                    />
                </div>
            </div>
        </div>

    )
}

export default Hero