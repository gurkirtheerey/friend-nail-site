import React from "react";
import { FaStar } from "react-icons/fa";

export const Testimonial = () => {
  return (
    <div className="m-2 md:m-8 lg:m-8 flex flex-col shadow-lg justify-center items-center p-6 max-w-lg max-h-96">
      <img
        className="mt-8 "
        src={"person1.jpg"}
        style={{
          borderRadius: "100%",
          height: "150px",
          width: "150px",
        }}
      />
      <div className="flex flex-col justify-center items-center m-4">
        <span className="text-lg md:text-2xl lg:text-3xl font-lobster">
          Full Name
        </span>
        <div className="flex p-2 md:m-4 lg:m-4 w-full justify-center">
          <FaStar size={30} />
          <FaStar size={30} />
          <FaStar size={30} />
          <FaStar size={30} />
          <FaStar size={30} />
        </div>
        <span className="text-xs md:text-sm lg:text-md p-2 md:p-4 lg:p-4">
          Loren Ipsum is simply dummy text of the printing and typesetting
          industry. Loren Ipsum ahas been dummy textever since the 1500s did you
          know that that's crazy bro dog wow
        </span>
      </div>
    </div>
  );
};
