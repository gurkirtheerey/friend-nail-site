import { useEffect, useState } from "react";

const useColors = () => {
  const [background, setBackground] = useState("bg-transparent");
  const [text, setText] = useState("text-white");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 45) {
        setBackground("bg-white");
        setText("text-black");
      } else {
        setBackground("bg-transparent");
        setText("text-white");
      }
    });
  }, []);

  return [{ text, background }];
};

export default useColors;
