import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    if (window !== undefined) {
      setScreen(window.innerWidth);
      window.addEventListener("resize", () => {
        setScreen(window.innerWidth);
      });
    }
  }, []);

  return screen;
};

export default useWindowResize;
