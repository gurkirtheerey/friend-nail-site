import React from "react";
import styles from "../styles/Home.module.css";

export const InfoContact = ({ children }) => {
  return (
    <div id="contacts" className="h-screen">
      <div className={`${styles.container__contact}`}>
        <div className={`${styles.contact}`}>
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-lobster text-center text-2xl md:text-5xl lg:text-5xl m-4">
              We'd love to hear from you
            </h1>
            <span className="text-center text-md md:text-2xl lg:text-2xl w-1/2 m-4 text-gray-800">
              Whether you have a question about pricing, services, or anything
              else, our team is ready to answer all of your questions
            </span>
            <button className="bg-blue-600 text-white p-4 md:px-8 lg:px-8 md:py-4 lg:py-4 font-semibold hover:bg-blue-700 m-4">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
