import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://myapp-tawny-psi.vercel.app/addProducts/${id}`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);

  return (
    <div className="mt-10">
      <div className="max-[350px] md:w-full bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
        {/* Card Image */}
        <img
          className="w-full h-[190px] bg-gray-400 rounded-2xl"
          src={product?.image}
          alt=""
        />
        <h2 className="md:text-xl text-gray-800">
          {product?.description}
        </h2>
        {/* Card Heading */}
        <div className="space-y-2 flex justify-between items-center">
          <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">
            {product?.name}
          </h2>
          {/* rating  */}
          <div className="flex mr-10">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1E293B"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <h2 className="md:text-xl text-gray-800">tk/{product?.price}</h2>
        </div>
        {/* Price and action button */}
        <div className="flex justify-between items-center font-medium">
          <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
