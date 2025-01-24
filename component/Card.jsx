import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card flex flex-col items-center gap-1 mt-3 hover:border-4 hover:border-red-500 hover:p-4 hover:rounded-xl hover:bg-orange-100">
      <img
        className=" md:h-[80px] md:w-[80px] h-[80px] w-[80px] rounded-full"
        src="https://media.istockphoto.com/id/1411029939/photo/top-view-on-colorful-stacked-books-education-and-learning-concept-background.jpg?b=1&s=612x612&w=0&k=20&c=d9FFCK3NXNcAP4VA7fuwpXOwoanpKqbJDjboEFI_9bk="
        alt=""
      />
      <div className="font-bold">{item}+</div>
      <div className="font-medium text-slate-500">Different Courses</div>
    </div>
  );
};

export default Card;
