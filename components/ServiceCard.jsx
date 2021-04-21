import React from "react";

export const ServiceCard = ({ url, header, paragraph }) => {
  return (
    <div
      className="flex flex-col max-w-sm h-96 m-2 md:m-8 lg:m-8 text-center rounded-xl shadow-2xl cursor-pointer 
       "
    >
      <img
        className="p-2 h-48 w-full self-center rounded-xl"
        src={`${url}`}
        alt="img"
      />
      <h4 className="text-xl font-semibold text-gray-800">{header}</h4>
      <span className="py-2 px-4 text-xs md:text-sm lg:text-sm text-gray-400">
        {paragraph}
      </span>
    </div>
  );
};
