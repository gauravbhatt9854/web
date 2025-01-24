import React from "react";
import './Contacts';

const ContactCard = () => {
  return (
    <div className="border rounded-xl m-4 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-center sm:text-left">
        <span>
          Be Part of a Growing Family:
          <span className="whitespace-nowrap ml-2 sm:ml-0">
            Work
            <span className="text-gradient">Hive</span>
          </span>
        </span>
      </div>

      <div className="font-inter text-xl sm:text-2xl mt-8 sm:mt-10 flex justify-center items-center text-center">
        If you have any questions, feel free to reach out!
      </div>
      <div className="text-gray-600 mt-6 sm:mt-8 font-inter text-lg sm:text-xl text-center px-4 sm:px-12 lg:px-16 relative flex flex-col justify-center items-center">
        <span className="text-3xl absolute left-4 sm:left-8 top-0 text-black">
          “
        </span>
        <p className="leading-relaxed sm:leading-loose text-sm sm:text-base">
          We believe every individual has untapped potential. We created
          WorkHive to help you uncover it by connecting you with opportunities
          that match your skills and passion. Trust us to help you bring out the
          best in yourself.
        </p>
        <span className="text-3xl absolute right-4 sm:right-8 bottom-0 text-black">
          ”
        </span>
      </div>
      <div className="flex flex-row sm:flex-row justify-center items-center mt-12 sm:mt-16 rounded-lg border-t shadow-2xl w-full sm:w-fit mx-auto">
        <div className="px-4 sm:px-6">
          <svg
            width="24"
            height="20"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.25 4.00033L12.1462 10.3873C12.6599 10.7561 13.3401 10.7561 13.8538 10.3873L22.75 4.00033M4 20.3337H22C23.6569 20.3337 25 18.9408 25 17.2225V4.7781C25 3.05988 23.6569 1.66699 22 1.66699H4C2.34315 1.66699 1 3.05988 1 4.7781V17.2225C1 18.9408 2.34315 20.3337 4 20.3337Z"
              stroke="url(#paint0_linear_1477_34)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1477_34"
                x1="1"
                y1="2"
                x2="25"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#61AFE4" />
                <stop offset="1" stopColor="#FF5F6D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-full sm:w-auto">
          <input
            className="text-lg placeholder-gray-700 font-inter outline-none lg:min-w-96"
            placeholder="Enter your email"
          />
        </div>
        <div className="bg-gradient-to-r mx-2 my-2 from-[#61AFE4]/50 to-[#FF5F6D]/50 p-2 sm:p-4 text-sm md:text-base font-inter font-bold rounded-l-lg rounded-br-lg cursor-pointer">
          <button>Get in Touch!</button>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;