import React from "react";
import { Testimonial } from "./Testimonial";
import styles from "../styles/Home.module.css";

export const TestimonialList = () => {
  return (
    <div
      id="testimonials"
      className={`md:h-screen lg:h-screen md:pt-32 lg:pt-32 flex flex-col items-center justify-center ${styles.testimonial}`}
    >
      <h2 className="text-center text-indigo-200 text-3xl md:text-6xl lg:text-6xl font-lobster">
        Testimonials
      </h2>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center h-full w-full md:pt-48">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};
