import React from 'react';

const Banner2 = ({ object, heading, text, img, bg }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center w-full ${bg} text-white font-sans`}>
      {/* Right Section */}
      <div className="md:w-1/2 w-full h-[25rem] sm:h-[28rem] md:h-full hidden md:inline-block">
        <img
          src={img} // Replace with the actual image URL
          alt="Freelancer working"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Section */}
      <div className="flex flex-col justify-center md:w-2/3 w-full px-8 md:px-12 py-6 md:py-10">
        <p className="text-lg sm:text-[20px] text-gray-300 font-poppins">{object}</p>
        <h1 className="text-3xl sm:text-4xl md:text-[38px] lg:text-4xl font-bold mt-4 font-poppins text-white">
          {heading}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 font-poppins">{text}</p>
        <button className="mt-6 px-6 py-3 border border-gray-300 rounded-md inline-block w-[15rem] sm:w-[18rem] hover:text-white transition duration-500 ease-in-out transform hover:scale-[1.12] hover:shadow-lg">
          Join as a client
        </button>
      </div>
    </div>
  );
}

export default Banner2;