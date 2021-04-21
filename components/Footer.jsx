import React from "react";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="h-84 md:h-64 lg:h-64 bg-gray-800 flex flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
        <div className="flex flex-col items-center p-2 md:p-4 lg:p-4 border-r-2 border-gray-600">
          <h1 className="text-gray-300 font-bold text-md md:text-2xl lg:text-2xl md:p-4 lg:p-4">
            Contact Us
          </h1>
          <span className="text-gray-400 text-center p-2 md:p-4 lg:p-4 font-semibold text-xs md:text-lg lg:text-lg">
            Questions? We've got answers.
          </span>
          <button className="p-2 md:p-4 lg:p-4 m-4 text-pink-400 border-pink-400 border-2 rounded">
            EMAIL US
          </button>
        </div>
        <div className="flex flex-col items-center p-2 md:p-4 lg:p-4 border-r-2 border-gray-600">
          <h1 className="text-gray-300 font-bold text-md md:text-2xl lg:text-2xl md:p-4 lg:p-4">
            Email updates
          </h1>
          <span className="text-gray-400 text-center p-2 md:p-4 lg:p-4 text-xs md:text-lg lg:text-lg">
            Be the first to hear about our offers and announcements.
          </span>
          <div className="hidden md:flex lg:flex md:flex-row lg:flex-row w-4/5">
            <input
              placeholder="email"
              className="px-4 py-2 w-4/5 bg-transparent border-2 border-gray-400 focus:outline-none text-gray-400 font-semibold"
            />
            <button className="w-1/5 bg-blue-600 text-white ml-4 hover:bg-blue-700 focus:outline-none">
              Send
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center p-2 md:p-4 lg:p-4 border-r-2 border-gray-600">
          <h1 className="text-gray-300 font-bold text-md md:text-2xl lg:text-2xl md:p-4 lg:p-4">
            Check Us Out
          </h1>
          <span className="text-gray-400 text-center p-2 md:p-4 lg:p-4 font-semibold text-xs md:text-lg lg:text-lg">
            Be the first to hear about our offers and announcements.
          </span>
          <div className="hidden md:flex lg:flex">
            <SocialIcon className="m-2" url="https://twitter.com" />
            <SocialIcon className="m-2" url="https://instagram.com" />
            <SocialIcon className="m-2" url="https://tiktok.com" />
          </div>
        </div>
      </div>
      <div className="bottom-0 bg-gray-600 text-white h-28 grid place-items-center">
        <span className="">
          Copyright &copy; -
          <span className="text-pink-400 font-bold text-lg">
            <span> </span>Gurkirt Heerey
          </span>
        </span>
      </div>
    </div>
  );
};
