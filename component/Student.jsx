import React from "react";
import Card from "./Card";
const Student = () => {
  let arr = [100, 20000, 30000, 4000, 5000];
  return (
    <div className="student flex flex-col items-center pb-5 ">
      <div className="top flex flex-col items-center md:mt-20">
        <div className="text-center text-indigo-700 font-bold mt-4">
          Pure Hardwork No Shortcut
        </div>
        <div
          className="w-36 border-yellow-300 border-b-4 h-2 mt-2 rounded-2xl
        md:w-90 hover:border-red-500 "
        ></div>
      </div>
      <div className="bottom flex flex-wrap gap-x-32 gap-y-10 mx-10 md:gap-x-96 justify-center items-center mt-10 md:mt-36">
        {arr.map((item) => (
          <Card key={item} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Student;
