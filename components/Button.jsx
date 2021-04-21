import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";

export const Button = ({ onClick, name }) => {
  return (
    <button
      className="text-white font-lobster text-3xl bg-purple-800 hover:bg-purple-700 w-full py-6"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
