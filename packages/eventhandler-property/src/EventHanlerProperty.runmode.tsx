import React, { useCallback } from "react";
import { SDK } from "@qcloud-apaas/web-sdk";
import { Switch, Form } from "antd";
import properties from "./properties";

const CustomDesignComponent = (props) => {
  const { onChange, compId, onMyEventTrigger } = props;
  //
  const { value, onChange: onModelChange } = SDK.useModel(compId);
  const eventBus = SDK.useEventBus("example");

  const handleChange = useCallback(
    (val) => {
      // 触发eventBus中的事件
      eventBus.emit("onSwitchChange", val);
      // 触发onModelChange 修改值
      onModelChange(val);
      onChange?.(val);
    },
    [onChange, onModelChange, eventBus]
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
