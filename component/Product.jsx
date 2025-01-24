import React from "react";
import Card from "./Card";

const Product = () => {
  let arr = [100, 20000, 30000, 4000, 5000];
  return (
    <div className="student flex flex-col items-center pb-5 md:mt-10  overflow-hidden">
      <div className="top flex flex-col items-center md:mt-10 md:mb-32">
        <div className="text-center text-indigo-700 font-bold mt-4">
          Our Products
        </div>
        <div
          className="w-36 border-yellow-300 border-b-4 h-2 mt-2 rounded-2xl
        md:w-90 hover:border-red-500"
        ></div>
      </div>
      <div className="bottom flex flex-wrap gap-x-40 gap-y-10 mx-10 md:gap-x-64 justify-evenly items-center mt-10 ">
        {arr.map((item) => (
          <Card key={item} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
