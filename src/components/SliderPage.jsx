import React from "react";
import Slider from "@mui/material/Slider";



export default function SliderPage({ selectedOption, handleChange }) {
  return (
    <div style={{ margin: "auto", padding: "0 250px", marginTop:"20px" }}>
      <Slider
        aria-label="Default"
        min={selectedOption.min}
        max={selectedOption.max}
        value={selectedOption.value}
        onChange={handleChange}
      />
    </div>
  );
}
