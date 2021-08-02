import React, { useState, useCallback } from "react";
import { Switch, Form } from "antd";
import "antd/es/switch/style/index.css";
import "antd/es/form/style/index.css";
import properties from "./properties";

const CustomDesignComponent = (props) => {
  const { onChange, onMyEventTrigger } = props;
  const handleChange = useCallback(
    (val) => {
      onChange?.(val);
    },
    [onChange]
  );
  return (
    <Form.Item label="选择器">
      <Switch
        onChange={handleChange}
        onClick={onMyEventTrigger}
        style={{ maxWidth: "300px" }}
      ></Switch>
    </Form.Item>
  );
};

CustomDesignComponent.properties = properties;

export default CustomDesignComponent;
