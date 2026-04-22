export default function Services() {
const services = [
  {
    img: "/images/service1.png",
    title: "Electrical Installation",
  },
  {
    img: "/images/service2.png",
    title: "Electrical Maintenance",
  },
  {
    img: "/images/service3.png",
    title: "Street Lighting Installation",
  },
  {
    img: "/images/service4.png",
    title: "DB Installation",
  },
  {
    img: "/images/service5.png",
    title: "Cable Management",
  },
  {
    img: "/images/service6.png",
    title: "Industrial Work",
  },
];

  return (
    <div className="pt-28 text-center min-h-screen px-6">

      <h1 className="text-3xl font-bold mb-10">Our Services</h1>

      {/* 🔥 GRID 6 BOX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {services.map((item, i) => (
          <div
            key={i}
            className="
              bg-white dark:bg-gray-900 
              rounded-xl shadow-lg 
              overflow-hidden
              transition duration-300
              hover:scale-105 
              hover:shadow-2xl 
              hover:shadow-yellow-400/40
              cursor-pointer
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">
                {item.title}
              </h2>
              <p className="text-sm opacity-70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}