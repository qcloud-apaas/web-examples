import React from "react";
import { Slider, Form } from "antd";
import { SDK } from "@qcloud-apaas/web-sdk";

const CustomRunComponent = (props) => {
  const { compId, defaultVolume, defaultBright } = props;
  const { value, onChange } = SDK.useModel(compId, {
    initialValue: [defaultVolume, defaultBright],
  });
  const [volume, bright] = value;
  return (
    <Form layout="horizontal">
      <Form.Item label="音量">
        <Slider
          value={volume}
          onChange={(val) => onChange([val, bright])}
        ></Slider>
      </Form.Item>
      <Form.Item label="亮度">
        <Slider
          value={bright}
          onChange={(val) => onChange([volume, val])}
        ></Slider>
      </Form.Item>
    </Form>
  );
};

export default CustomRunComponent;
