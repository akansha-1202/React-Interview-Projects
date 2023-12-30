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
      <h1 className="text-6xl text-center text-white">RANDOM COLOR</h1>
      <div className="flex justify-center gap-x-4">
        <button
          className={`border-2 p-2 rounded-md hover:bg-blue-300 transition-transform transform hover:scale-110 active:scale-100 focus:outline-none duration-400 focus:ring focus:border-blue-300 ${
            typeOfColor === "hex" ? "bg-red-600" : " bg-white"
          }`}
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>

        <button
          className={`border-2 p-2 rounded-md hover:bg-blue-300 transition-transform transform hover:scale-110 active:scale-100 focus:outline-none duration-400 focus:ring focus:border-blue-300 ${
            typeOfColor === "rgb" ? "bg-red-600" : " bg-white"
          }`}
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>

        <button
          className="border-2 p-2 rounded-md bg-white hover:bg-blue-300 transition-transform transform hover:scale-110 active:scale-100 duration-400 focus:outline-none focus:ring focus:border-blue-300"
          onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}
        >
          Create Random Color
        </button>
      </div>
      <div className="py-20 shadow-2xl border w-[40%] m-[auto]">
        <h1 className="text-center text-white text-3xl">{typeOfColor === "hex" ? "HEX Color : " : "RGB Color : " }{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
