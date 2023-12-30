import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor);
    console.log("hexColor", hexColor);
  }

  function handleRGBColor() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  }

  useEffect(() => {
    typeOfColor === "rgb" ? handleRGBColor : handleHexColor;
  }, [typeOfColor]);
  return (
    <div
      className={`w-[100%] h-[100vh] bg-[${color}] p-12 flex flex-col gap-y-6`}
    >
      <h1 className="text-6xl text-center">RANDOM COLOR</h1>
      <div className="flex justify-center gap-x-4">
        <button
          className={`border-2 p-2 rounded-md bg-white ${
            typeOfColor === "hex" ? "bg-red-400" : ""
          }`}
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>

        <button
          className={`border-2 p-2 rounded-md bg-white ${
            typeOfColor === "rgb" ? "bg-red-400" : ""
          }`}
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>

        <button
          className="border-2 p-2 rounded-md bg-white"
          onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}
        >
          Create Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
