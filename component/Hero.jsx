import React from "react";
//rafce
const Hero = () => {
  return (
    <div>
      <div>
        <img
          className="w-screen block md:hidden md:h-[100vh]"
          src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mobile"
        />
      </div>
      <div>
        <img
          className="w-screen hidden md:block object-cover h-[600px]"
          src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="laptop"
        />
      </div>
    </div>
  );
};

export default Hero;
