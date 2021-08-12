import React from "react";
import { Slider } from "antd";
import "antd/es/slider/style/index.css";
import properties from "./properties";

const CustomDesignComponent = () => {
  return (
    <div style={{ padding: "20px 0", maxWidth: 380 }}>
      <Slider defaultValue={20}></Slider>
    </div>
  );
};

CustomDesignComponent.properties = properties;

export default CustomDesignComponent;
