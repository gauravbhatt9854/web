import React from "react";

const TempCard = () => {
  let arr = [
    "https://images.pexels.com/photos/1035683/pexels-photo-1035683.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/848541/pexels-photo-848541.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1035683/pexels-photo-1035683.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/848541/pexels-photo-848541.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1035683/pexels-photo-1035683.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/848541/pexels-photo-848541.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 bg-repeat bg-center bg-cover grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-4 place-content-center my-8 md:gap-4 mx-8 sm:gap-4 lg:px-20 overflow-hidden">
      {arr.map((item) => (
        <div className=" group flex - flex-col justify-between items-center gap-4 px-4 hover:rounded-md hover:border-red-500 hover:gap-4 shadow-zinc-950 hover:border-2">
          <div className="overflow-hidden">
            <img
              src={item}
              alt="item"
              className="h-80 animate-pulse group-hover:scale-150 hover:animate-none object-cover duration-1000"
            />
          </div>
          <div className=" shadow-2xl text-center">
            <div> Deliacate Necklace</div>
            <p>$500 /</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TempCard;
