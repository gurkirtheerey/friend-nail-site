import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Navigation } from "./Navigation";
import useWindowResize from "../hooks/useWindowResize";
import { Hambuger } from "./Hambuger";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  const screen = useWindowResize();
  const [toggled, setToggled] = useState(false);

  const onClick = () => setToggled(true);

  return (
    <>
      {toggled && <Sidebar setToggled={setToggled} />}
      <div id="home" className={`${styles.container} bg-indigo-800`}>
        <div
          className={styles.background}
          onClick={() => (toggled ? setToggled(false) : null)}
        >
          {screen > 767 ? <Navigation /> : <Hambuger onClick={onClick} />}
          <div className="flex justify-around h-96 text-white">
            <div></div>
            <div className="flex flex-col justify-end items-center">
              <span className="text-xl font-lobster md:text-5xl lg:text-5xl mb-6">
                Schedule Your Next Appointment
              </span>
              <button className="bg-indigo-400 px-6 py-4 rounded-full hover:bg-indigo-500">
                <span className="font-lobster text-xl">Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
