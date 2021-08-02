import React from "react";
import { Switch, Form } from "antd";
import "antd/es/switch/style/index.css";
import "antd/es/form/style/index.css";
import properties from "./properties";

const CustomDesignComponent = () => {
  return (
    <Form.Item label="开关" style={{ maxWidth: "300px" }}>
      <Switch disabled></Switch>
    </Form.Item>
  );
};

CustomDesignComponent.properties = properties;
CustomDesignComponent.defaultProps = {
  placeholder: "请输入",
};

export default CustomDesignComponent;
