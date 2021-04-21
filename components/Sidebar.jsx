import React from "react";
import styles from "../styles/Home.module.css";
import { Button } from "./Button";

export const Sidebar = ({ setToggled }) => {
  const handleClick = (view) => {
    let item = document.getElementById(view);
    item.scrollIntoView({ behavior: "smooth" });
    setToggled(false);
  };

  return (
    <div className={`${styles.sidebar}`}>
      <div className="flex flex-col items-center justify-evenly h-1/2">
        <Button onClick={() => handleClick("home")} name="Home" />
        <Button onClick={() => handleClick("middle")} name="Services" />
        <Button
          onClick={() => handleClick("testimonials")}
          name="Testimonials"
        />
        <Button onClick={() => handleClick("contacts")} name="Contacts" />
      </div>
    </div>
  );
};
