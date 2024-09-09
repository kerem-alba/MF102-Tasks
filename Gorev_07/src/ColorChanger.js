import React, { useState } from "react";

function ColorChanger() {
  const colors = [
    "#DFFF00",
    "#FFBF00",
    "#FF7F50",
    "#DE3163",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED",
    "#CCCCFF",
    "#d4d89a",
    "#add4de",
    "#dc9ca4",
    "#ebd3dd",
    "#bed4ab",
    "#d7aefb",
    "#f0a6ca",
    "#f4acb7",
    "#f9b4c0",
    "#fcbdc6",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = (index) => {
    setColorIndex(index);
  };

  const nextColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div className="container">
      <div className="sidebar">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{
              backgroundColor: color,
              border: index === colorIndex ? "4px solid black" : "none",
            }}
            onClick={() => changeColor(index)}
          ></div>
        ))}
      </div>
      <div
        className="background"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => nextColor()}
          style={{ color: colors[colorIndex] }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;
