import React from "react";
import { FaBars } from "react-icons/fa";

export const Hambuger = ({ onClick }) => {
  return (
    <span onClick={onClick} className="absolute top-0 left-0">
      <FaBars className="m-4" size="40" color="#fff" />
    </span>
  );
};
