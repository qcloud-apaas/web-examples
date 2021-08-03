import React, { useCallback } from "react";
import { Switch, Form } from "antd";
import { SDK } from "@qcloud-apaas/web-sdk";
import "antd/es/switch/style/index.css";
import "antd/es/form/style/index.css";
import properties from "./properties";

const CustomDesignComponent = (props) => {
  const { onChange, compId, onMyEventTrigger } = props;
  //
  const { value, onChange: onModelChange } = SDK.useModel(compId);

  const handleChange = useCallback(
    (val) => {
      onModelChange(val);
      onChange?.(val);
    },
    [onChange, onModelChange]
  );
  return (
    <Form>
      <Form.Item label="选择器">
        <Switch
          checked={value}
          onChange={handleChange}
          onClick={onMyEventTrigger}
          style={{ maxWidth: "300px" }}
        ></Switch>
      </Form.Item>
    </Form>
  );
};

CustomDesignComponent.properties = properties;

export default CustomDesignComponent;
