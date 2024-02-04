import {useLoaderData } from "react-router-dom";
import StaticBrandCard from "./StaticBrandCard";

const StaticBrand = () => {
  const allProduct = useLoaderData();
  console.log(allProduct);
  const particularProduct = allProduct.map((p) => <StaticBrandCard key={p._id} p={p}></StaticBrandCard>);
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl mb-10 font-semibold text-black">
        Static Brands
      </h1>
      <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
      {particularProduct}
        {/* <Link to={`/singleProduct/`}>
          <div className="rounded-md p-8 bg-white shadow-lg">
            <h2 className="text-center text-black text-4xl">Samsung</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere molestias modi commodi doloremque iusto, aut nihil.
              Adipisci, minus numquam.
            </p>
          </div>
        </Link> */}
        {/* <Link to="/">
          <div className="rounded-md p-8 bg-white shadow-lg">
            <h2 className="text-center text-black text-4xl">Sony</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere molestias modi commodi doloremque iusto, aut nihil.
              Adipisci, minus numquam.
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="rounded-md p-8 bg-white shadow-lg">
            <h2 className="text-center text-black text-4xl">Apple</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere molestias modi commodi doloremque iusto, aut nihil.
              Adipisci, minus numquam.
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="rounded-md p-8 bg-white shadow-lg">
            <h2 className="text-center text-black text-4xl">Symphony</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere molestias modi commodi doloremque iusto, aut nihil.
              Adipisci, minus numquam.
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="rounded-md p-8 bg-white shadow-lg">
            <h2 className="text-center text-black text-4xl">Intel</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere molestias modi commodi doloremque iusto, aut nihil.
              Adipisci, minus numquam.
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="rounded-md p-8 bg-white shadow-lg">
            <h2 className="text-center text-black text-4xl">Google</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere molestias modi commodi doloremque iusto, aut nihil.
              Adipisci, minus numquam.
            </p>
          </div>
        </Link> */}
      </div>
      {/* <div>{particularProduct}</div> */}
    </div>
  );
};

export default StaticBrand;
