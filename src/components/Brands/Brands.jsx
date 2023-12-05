import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import sd1 from '../../../src/assets/1.jpg'
// import sd2 from '../../../src/assets/2.jpg'
// import sd3 from '../../../src/assets/3.jpg'

const Brands = ({single}) => {
  //let showingProduct = [];
  const { brandData } = useLoaderData();
  console.log(single);
  //const { productData } = useLoaderData();

  // productData.map((product) => {
  //   console.log('Product ID:', product._id);
  //   console.log('Product Name:', product.name);

  //   return null; 
  // });


  // const selectedProduct = productData.filter((product) => {
  //   console.log(product.brand)
  //   console.log(brandData.name)
  //   product.brand === brandData.name;
  // });
  // console.log(selectedProduct);
  // showingProduct = [...selectedProduct, showingProduct];
  // console.log(showingProduct);

  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold text-black">
        Products of {brandData.name}
      </h1>

      <div id="gallery" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://i.ibb.co/VMdhjx3/online-shopping-or-delivery-concept-illustration-3d-show-trolley-bags-and-boxes-modern-trendy-design.jpg"
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src=""
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src=""
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src=""
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://i.ibb.co/VMdhjx3/online-shopping-or-delivery-concept-illustration-3d-show-trolley-bags-and-boxes-modern-trendy-design.jpg"
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
      <button className="btn btn-outline btn-primary">Details</button>
      <button className="btn btn-outline btn-primary">Update</button>
    </div>
  );
};

export default Brands;
