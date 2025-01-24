import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-5 pb-20">
      <div className=" mb-8 flex flex-col  gap-y-2 self-center px-10 md:self-start ">
        <div className="flex gap-2 items-center">
          <img
            className="h-8 w-8  md:h-20 md:w-20 rounded-full object-cover"
            src="https://images.pexels.com/photos/351263/pexels-photo-351263.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div>Golu Bhatt</div>
        </div>
        <div>Email : gbhatt570@gmail.com</div>
      </div>
      <div className="flex gap-x-5 md:flex-wrap md:gap-x-32 lg:gap-x-32 xl:gap-x-64">
        <div className="skills  p-x-10 gap-y-2 flex flex-col">
          <p className=" text-sm hover:text-red-500 hover:text-2xl">About us</p>
          <p className=" text-sm hover:text-red-500 hover:text-2xl">FAQs</p>
          <p className=" text-sm hover:text-red-500 hover:text-2xl">
            Privacy Policy
          </p>
        </div>
        <div className="product p-x-10 gap-y-2 flex flex-col">
          <p className=" text-sm hover:text-red-500 hover:text-2xl">
            Skill lab
          </p>
          <p className=" text-sm hover:text-red-500 hover:text-2xl">
            Job Portal
          </p>
          <p className=" text-sm hover:text-red-500 hover:text-2xl">
            Experience Portel
          </p>
          <p className=" text-sm hover:text-red-500 hover:text-2xl">
            Become an Affiliate
          </p>
          <p className=" text-sm hover:text-red-500 hover:text-2xl">
            Hall of Fame
          </p>
        </div>
        <div className="Links flex flex-col p-x-10 gap-y-2">
          <a className=" text-sm hover:text-red-500 hover:text-2xl" href="/#">
            Discord Channel
          </a>
          <a className=" text-sm hover:text-red-500 hover:text-2xl" href="/#">
            Youtube
          </a>
          <a className=" text-sm hover:text-red-500 hover:text-2xl" href="/#">
            Careers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
