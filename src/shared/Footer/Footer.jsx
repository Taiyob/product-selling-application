import { Link } from "react-router-dom";
//import "../../../src/root.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-white shadow-lg w-full">
        <div className="grid grid-cols-1fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="">
            <h3 className="text-2.5xl text-gray-800 py-4">Our Branches</h3>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaMapMarkerAlt className="pr-2 text-orange-700 hover:pr-8"></FaMapMarkerAlt>{" "}
              Canada
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaMapMarkerAlt className="pr-2 text-orange-700 hover:pr-8"></FaMapMarkerAlt>{" "}
              United Kingdom
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaMapMarkerAlt className="pr-2 text-orange-700 hover:pr-8"></FaMapMarkerAlt>{" "}
              Australia
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaMapMarkerAlt className="pr-2 text-orange-700 hover:pr-8"></FaMapMarkerAlt>{" "}
              Spain
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaMapMarkerAlt className="pr-2 text-orange-700 hover:pr-8"></FaMapMarkerAlt>{" "}
              France
            </Link>
          </div>
          <div className="">
            <h3 className="text-2.5xl text-gray-800 py-4">Contact Us</h3>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaChevronRight className="pr-2 text-orange-700 hover:pr-8"></FaChevronRight>{" "}
              Home
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaChevronRight className="pr-2 text-orange-700 hover:pr-8"></FaChevronRight>{" "}
              Packages
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaChevronRight className="pr-2 text-orange-700 hover:pr-8"></FaChevronRight>{" "}
              Services
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaChevronRight className="pr-2 text-orange-700 hover:pr-8"></FaChevronRight>{" "}
              Pricing
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaChevronRight className="pr-2 text-orange-700 hover:pr-8"></FaChevronRight>{" "}
              Contact
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaChevronRight className="pr-2 text-orange-700 hover:pr-8"></FaChevronRight>{" "}
              Blog
            </Link>
          </div>
          <div className="">
            <h3>Contact Us</h3>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaPhoneAlt className="pr-2 text-orange-700 hover:pr-8"></FaPhoneAlt>{" "}
              +(880) 182 901 490 64
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaPhoneAlt className="pr-2 text-orange-700 hover:pr-8"></FaPhoneAlt>{" "}
              +(880) 094 311 758 90
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaEnvelope className="pr-2 text-orange-700 hover:pr-8"></FaEnvelope>{" "}
              oli1412001@gmail.com
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaMapMarkerAlt className="pr-2 text-orange-700 hover:pr-8"></FaMapMarkerAlt>{" "}
              Kafrul, Bangladesh- Dhaka 1206
            </Link>
          </div>
          <div className="">
            <h3 className="text-2.5xl text-gray-800 py-4">Contact Info</h3>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaFacebookF className="pr-2 text-orange-700 hover:pr-8"></FaFacebookF>{" "}
              Facebook
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaTwitter className="pr-2 text-orange-700 hover:pr-8"></FaTwitter>{" "}
              Twitter
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaPinterest className="pr-2 text-orange-700 hover:pr-8"></FaPinterest>{" "}
              Pinterest
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaInstagram className="pr-2 text-orange-700 hover:pr-8"></FaInstagram>{" "}
              Instagram
            </Link>
            <Link className="text-gray-600 text-base py-4 flex items-center">
              {" "}
              <FaLinkedin className="pr-2 text-orange-700 hover:pr-8"></FaLinkedin>{" "}
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="text-base text-center py-4 pt-8 text-gray-600 border-t border-gray-600">
          &copy; Created By <span>Oli Tech Industries</span> | All Rights
          Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
