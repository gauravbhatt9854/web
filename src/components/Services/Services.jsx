import ServicesCard from "./ServicesCard";

const services = [
  { title: "Technology & Programming", rating: "4.85", skills: 1853 },
  { title: "Engineering & Architecture", rating: "4.85", skills: 650 },
  { title: "Design & Arts", rating: "4.91", skills: 968 },
  { title: "Media & Visual Content", rating: "4.85", skills: 653 },
  { title: "Digital Marketing", rating: "4.65", skills: 553 },
  { title: "Marketing & Sales", rating: "4.77", skills: 392 },
  { title: "Finance", rating: "4.79", skills: 214 },
  { title: "Writing & Translation", rating: "4.92", skills: 505 },
];

export default function Services() {
  return (
    <div
      className="p-14 font-poppins flex flex-col justify-center items-center"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(255, 255, 255, 0.5) 50%, #FFFFFF 100%),
          linear-gradient(286.07deg, rgba(44, 187, 1, 0.3) 30%, #61AFE4 99.41%)
        `,
      }}
    >
      <div className="text-3xl md:text-4xl font-semibold text-center pb-16">
        What Services are you looking for?
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            rating={service.rating}
            skills={service.skills}
          />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button className="bg-black text-2xl rounded-r-xl rounded-bl-xl text-white px-16 py-4 flex items-center">
          <div className="pr-3">Explore Skills</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
