import { useLayoutEffect, useState } from "react";

const UseWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResizeWindow() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return windowSize;
};

export default UseWindowResize;
