import Banner from "../../components/Banner/Banner";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { SiSymphony } from "react-icons/si";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const lodedBrandName = useLoaderData();
  console.log(lodedBrandName);
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
        {lodedBrandName.map((brandName) => (
          <div
            key={brandName._id}
            className="grid grid-cols-3 grid-flow-row grid-rows-1 gap-6 md:gap-8 lg:gap-12 xl:gap-16"
          >
            <Link to="/brands">
              <div className="rounded-md relative p-8 bg-white shadow-lg">
                <FaApple className="h-24 w-24 leading-24 text-center text-2xl text-whitebg-orange-500 rounded-full mb-2"></FaApple>
                <h3 className="text-2xl py-2 text-var(--text-color-1)">
                  {brandName.name}
                </h3>
                <p>
                  Empowering Innovation, Connecting Hearts, Shaping Tomorrow
                  with Simplicity and Elegance
                </p>
              </div>
            </Link>
            <Link to="/brands">
              <div className="rounded-md relative p-8 bg-white shadow-lg">
                <SiSamsung className="h-24 w-24 leading-24 text-center text-2xl text-whitebg-orange-500 rounded-full mb-2"></SiSamsung>
                <h3 className="text-2xl py-2 text-var(--text-color-1)">
                  {brandName.name}
                </h3>
                <p>
                  Harmony in Complexity, Symphony in Simplicity – SiSymphony
                  Unleashed.
                </p>
              </div>
            </Link>
            <Link to="/brands">
              <div className="rounded-md relative p-8 bg-white shadow-lg">
                <SiSony className="h-24 w-24 leading-24 text-center text-2xl text-whitebg-orange-500 rounded-full mb-2"></SiSony>
                <h3 className="text-2xl py-2 text-var(--text-color-1)">
                  {brandName.name}
                </h3>
                <p>
                  Elevate Your Senses, Experience Innovation, Unleashing
                  Tomorrows Entertainment Today – Sony.
                </p>
              </div>
            </Link>
            <Link to="/brands">
              <div className="rounded-md relative p-8 bg-white shadow-lg">
                <FaGoogle className="h-24 w-24 leading-24 text-center text-2xl text-whitebg-orange-500 rounded-full mb-2"></FaGoogle>
                <h3 className="text-2xl py-2 text-var(--text-color-1)">
                  {brandName.name}
                </h3>
                <p>
                  Google: Enabling Dreams, Empowering Lives, and Connecting the
                  World Innovatively.
                </p>
              </div>
            </Link>
            <Link to="/brands">
              <div className="rounded-md relative p-8 bg-white shadow-lg">
                <SiIntel className="h-24 w-24 leading-24 text-center text-2xl text-whitebg-orange-500 rounded-full mb-2"></SiIntel>
                <h3 className="text-2xl py-2 text-var(--text-color-1)">
                  {brandName.name}
                </h3>
                <p>
                  Intel: Pioneering Innovation, Powering a Connected and
                  Intelligent Future. Unleashing Tomorrows Possibilities.
                </p>
              </div>
            </Link>
            <Link to="/brands">
              <div className="rounded-md relative p-8 bg-white shadow-lg">
                <SiSymphony className="h-24 w-24 leading-24 text-center text-2xl text-whitebg-orange-500 rounded-full mb-2"></SiSymphony>
                <h3 className="text-2xl py-2 text-var(--text-color-1)">
                  {brandName.name}
                </h3>
                <p>
                  Harmonizing Technology, Enriching Lives with Seamless
                  Connectivity and Innovation.
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
