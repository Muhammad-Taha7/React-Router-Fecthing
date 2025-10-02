import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

export const Collections = () => {
  const Data = useLoaderData();
  const [loading, setLoading] = useState(true);
console.log(Data);

  useEffect(() => {
    // Simulate loader delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  // Loader
  if (loading) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <img
          src="https://i.gifer.com/ZZ5H.gif"
          alt="Loading..."
          className="w-24 h-24"
        />
      </div>
    );
  }

  // 404 Page if no data
  if (!Data || Data.length === 0) {
    return (
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Not Found"
          className="w-[400px] mb-6"
        />
        <h1 className="text-3xl font-bold">404 - No Products Found</h1>
        <p className="text-gray-400 mt-2">Sorry, we couldn’t find any products.</p>
      </div>
    );
  }

  // Data Available
  return (
    <div className="collections-page w-full bg-black text-white">
      {/* Heading */}
      <div className="heading p-8">
        <h2 className="text-[1.8rem] border-b pb-2">Products</h2>
      </div>

      {/* Products Grid */}
      <div className="cards-layout min-h-screen w-full px-[3rem] grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Data.map((current, index) => (
          <div
            key={index}
            className="card-1 border border-gray-700 rounded-lg overflow-hidden shadow-md bg-gray-900 hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="img flex items-center justify-center h-[18rem] p-4 bg-white">
              <img
                src={current.image}
                alt={current.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold line-clamp-2">
                {current.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {current.description}
              </p>
              <span className="text-white font-bold text-lg">
                ${current.priceCents}
              </span>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
