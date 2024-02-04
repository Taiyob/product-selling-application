import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
  let showingProduct = [];
  const { brandData } = useLoaderData();
  const { productData } = useLoaderData();
  console.log(productData);
  const matchingData = productData.filter((matchdata) => {
    return matchdata.brand === brandData.name;
  });
  console.log(matchingData);
  showingProduct = [...matchingData, showingProduct];
  console.log(showingProduct);
  return (
    <div>
      {matchingData.map((realData) => (
        <div key={realData._id} className="mt-10">
          <div className="flex justify-between">
            <h1 className="text-center text-4xl font-bold text-black">
              Products of {realData.name}
            </h1>
            <p className="text-center text-2xl font-bold text-black bg-orange-300 p-2 rounded">
              Price: {realData?.price}/tk
            </p>
          </div>

          <div id="gallery" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="duration-700 ease-in-out" data-carousel-item>
                <img
                  src={realData?.image}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div
                className="duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src={realData?.image}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div className="duration-700 ease-in-out" data-carousel-item>
                <img
                  src={realData?.image}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div className="duration-700 ease-in-out" data-carousel-item>
                <img
                  src={realData?.image}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div className="duration-700 ease-in-out" data-carousel-item>
                <img
                  src={realData?.image}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
            </div>
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <Link
            to={`/product-details/${realData._id}`}
            className="btn btn-outline btn-primary mr-2"
          >
            Details
          </Link>
          <button className="btn btn-outline btn-primary">Update</button>
        </div>
      ))}
    </div>
  );
};

export default Brands;
