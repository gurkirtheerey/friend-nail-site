import React from "react";
import { ServiceCard } from "./ServiceCard";

export const Service = () => {
  return (
    <div id="middle" className={`md:h-screen lg:h-screen pt-32`}>
      <h2 className="text-center text-indigo-800 text-3xl md:text-6xl lg:text-6xl font-lobster">
        Services
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center h-4/5 md:h-full lg:h-full w-full">
        <ServiceCard
          url="card1.jpg"
          header="Manicure Services"
          paragraph="French manicure, or normal manicure services for your nails that makes
        it look fresh and hygeine. Also, this massage increases the blood
        circulation and nail growth."
        />
        <ServiceCard
          url="card2.jpg"
          header="Manicure Services"
          paragraph="French manicure, or normal manicure services for your nails that makes
        it look fresh and hygeine. Also, this massage increases the blood
        circulation and nail growth."
        />
        <ServiceCard
          url="card3.jpg"
          header="Manicure Services"
          paragraph="French manicure, or normal manicure services for your nails that makes
        it look fresh and hygeine. Also, this massage increases the blood
        circulation and nail growth."
        />
      </div>
    </div>
  );
};
