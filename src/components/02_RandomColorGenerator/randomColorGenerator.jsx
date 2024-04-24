import React, { useEffect, useState } from "react";

const RandomColorGenerator = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  //Utility function to generate random color
  const randomColor = (length) => Math.floor(Math.random() * length);

  useEffect(() => {
    colorType === "hex"
      ? handleCreateRandomHexColor()
      : handleCreateRandomRGBColor();
  }, [colorType]);
  //Random Hex Color
  const handleCreateRandomHexColor = () => {
    const hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[randomColor(hexValues.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  //Random RGB Color
  const handleCreateRandomRGBColor = () => {
    let r = randomColor(256);
    let g = randomColor(256);
    let b = randomColor(256);

    console.log(`rgb${r},${g},${b}`);
    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        margin: "auto",
      }}
    >
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button
        onClick={
          colorType === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          fontSize: "60px",
          color: "#ffffff",
          flexDirection: "column",
        }}
      >
        <h3>{colorType} Color</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
