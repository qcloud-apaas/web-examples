import React from "react";
import { Switch, Form } from "antd";
import { SDK } from "@qcloud-apaas/web-sdk";
import "antd/es/switch/style/index.css";
import "antd/es/form/style/index.css";
import properties from "./properties";

const CustomDesignComponent = (props) => {
  const { label } = props;
  const labelStr = SDK.transMetaVal2PureVal(label);

  return (
    <Form>
      <Form.Item label={labelStr}>
        <Switch disabled></Switch>
      </Form.Item>
    </Form>
  );
};

CustomDesignComponent.properties = properties;
CustomDesignComponent.defaultProps = {
  label: "开关",
};

export default CustomDesignComponent;
