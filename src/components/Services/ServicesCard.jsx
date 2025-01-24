export default function ServiceCard({ title, rating, skills }) {
    return (
      <div
        className="rounded-xl bg-white bg-opacity-40 flex flex-col justify-between items-center p-10 
          transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:cursor-pointer hover:shadow-lg text-gray-500 hover:text-black"
      >
        <div className="text-[24px] font-medium max-w-48  text-center pb-4">
          {title}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{rating}/5</span>
          </div>
          <div>{skills} skills</div>
        </div>
      </div>
    );
  }