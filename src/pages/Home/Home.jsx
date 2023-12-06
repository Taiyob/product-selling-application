import Banner from "../../components/Banner/Banner";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { SiSymphony } from "react-icons/si";
import { Link, useLoaderData } from "react-router-dom";

const brandIcons = {
  Apple: FaApple,
  Samsung: SiSamsung,
  Sony: SiSony,
  Google: FaGoogle,
  Intel: SiIntel,
  Symphony: SiSymphony,
};

const Home = () => {
  const lodedBrandName = useLoaderData();
  console.log(lodedBrandName);
  const brandCardComponents = lodedBrandName.map((brandName) => {
    const IconComponent = brandIcons[brandName.name];
    return (
      <div key={brandName._id} className="">
        <Link to={`/brands/${brandName._id}`}>
          <div className="rounded-md relative p-8 bg-white shadow-lg">
            {IconComponent && (
              <IconComponent className="h-24 w-24 leading-24 text-center text-2xl text-white bg-orange-500 rounded-full mb-2" />
            )}
            <h3 className="text-2xl py-2 text-var(--text-color-1)">
              {brandName.name}
            </h3>
            <p>
              Empowering Innovation, Connecting Hearts, Shaping Tomorrow with Simplicity and Elegance
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <Banner></Banner>
      <section className="bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/2093322/pexels-photo-2093322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <h1 className="text-center text-4xl mb-10 font-semibold text-black">
          Brands
        </h1>
        <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {brandCardComponents}
        </div>
      </div>
    </div>
  );
};

export default Home;
