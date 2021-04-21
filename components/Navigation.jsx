import React from "react";
import { Link } from "react-scroll";
import useColors from "../hooks/useColors";
import styles from "../styles/Navigation.module.css";

export const Navigation = () => {
  const [{ text, background }] = useColors();

  return (
    <div
      className={`fixed top-0 ${text} ${styles.navigation} w-full flex justify-evenly p-8 text-xl font-semibold ${background} font-lobster`}
    >
      <div className="w-1/5 flex justify-between">
        <span className={`hover:text-gray-400 cursor-pointer`}>
          <Link to="home" smooth>
            Home
          </Link>
        </span>
        <span className={`hover:text-gray-400 cursor-pointer`}>About</span>
        <span className={`hover:text-gray-400 cursor-pointer`}>
          <Link to="middle" smooth>
            Services
          </Link>
        </span>
      </div>
      <div>
        <span className="text-4xl">MK Salon</span>
      </div>
      <div className="w-1/5 flex justify-between">
        <span className={`hover:text-gray-400 cursor-pointer`}>
          <Link to="testimonials" smooth>
            Testimonials
          </Link>
        </span>
        <span className={`hover:text-gray-400 cursor-pointer`}>
          <Link to="contacts" smooth>
            Contacts
          </Link>
        </span>
        <span className={` ${text} cursor-pointer px-6 rounded-lg text-center`}>
          Book
        </span>
      </div>
    </div>
  );
};
