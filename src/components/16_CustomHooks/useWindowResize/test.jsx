import React from "react";
import useWindowResize from "./index.jsx";

const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Use Window resize hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
