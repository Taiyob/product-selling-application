import { Link } from "react-router-dom";
import '../../../src/root.css'

const Banner = () => {
  return (
    <div>
      <div className="flex items-center flex-wrap gap-6 pt-25">
        <div className="flex-1 flex-shrink-1 flex-grow-1 max-w-[45rem]">
          <img
            className="w-full"
            src="https://i.ibb.co/vz8Pdsc/plane.png"
            alt=""
          />
        </div>
        <div className="flex-1 flex-shrink-1 flex-grow-1 max-w-[45rem]">
            <h3 className="text-gray-700 text-4xl">Adventure Is Mindblowing Features</h3>
            <p className="text-base leading-7 text-gray-600 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illo similique perferendis accusantium totam eum dolorem impedit ipsum quibusdam ducimus!
            </p>
            <Link className="mt-4 inline-block px-12 py-2 text-1.7xl text-white bg-orange-500 rounded-md cursor-pointer hover:tracking-wide">Explore Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
