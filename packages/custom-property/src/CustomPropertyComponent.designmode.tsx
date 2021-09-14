import React from "react";
import { Slider, Form } from "antd";
import properties from "./properties";

const CustomRunComponent = (props) => {
  const { defaultVolume, defaultBright } = props;
  return (
    <Form layout="horizontal">
      <Form.Item label="音量">
        <Slider value={defaultVolume}></Slider>
      </Form.Item>
      <Form.Item label="亮度">
        <Slider value={defaultBright}></Slider>
      </Form.Item>
    </Form>
  );
};

CustomRunComponent.properties = properties;

export default CustomRunComponent;
