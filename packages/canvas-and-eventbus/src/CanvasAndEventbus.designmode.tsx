import React from "react";
import properties from "./properties";
import { SDK } from "@qcloud-apaas/web-sdk";
import { Button } from  "tea-component"

const CustomRunComponent = (props) => {
  const { buttonText } = props;
  return (
    <Button type="primary">
      {SDK.transMetaVal2PureVal(buttonText) || "打开弹窗"}
    </Button>
  );
};

CustomRunComponent.properties = properties;
CustomRunComponent.defaultProps = {
  title: "请输入",
  buttonText: "打开弹窗",
};

export default CustomRunComponent;
