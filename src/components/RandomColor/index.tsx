import { useEffect, useState } from "react";

const generateHexColor = () => {
  const randomColorValue = Math.floor(Math.random() * 0xffffff);
  const hexColor = randomColorValue.toString(16).padStart(6, "0");
  return `#${hexColor}`;
};

const Random_Int = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRgbColor = () => {
  const R = Random_Int(0, 256);
  const G = Random_Int(0, 256);
  const B = Random_Int(0, 256);
  return `rgb(${R}, ${G}, ${B})`;
};

const RandomColorGenerator = () => {
  const [currentColor, setCurrentColor] = useState(generateHexColor());

  return (
    <section
      className=" color-gen__wrapper"
      style={{ background: currentColor }}
    >
      <h2>Random Color Generator</h2>
      <div>
        <button onClick={() => setCurrentColor(generateHexColor())}>
          Generate Hex Color
        </button>
        <button onClick={() => setCurrentColor(generateRgbColor())}>
          Generate Rgb Color
        </button>
      </div>
      <p>{currentColor}</p>
    </section>
  );
};

export default RandomColorGenerator;
