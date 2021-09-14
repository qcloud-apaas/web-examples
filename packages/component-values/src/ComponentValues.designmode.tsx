import React, { useMemo } from "react";
// import { SDK } from "@qcloud-apaas/web-sdk";
import properties from "./properties";
import { Form } from "antd";

const CustomRunComponent = (props) => {
  const { priceComponent, countComponent } = props;
  const totalPrice = useMemo(() => {
    const price = priceComponent?.compId ?? "";
    const count = countComponent?.compId ?? "";
    return `{${price}} * {${count}}`;
  }, [priceComponent, countComponent]);
  return <Form.Item label="总金额">{totalPrice}</Form.Item>;
};

CustomRunComponent.properties = properties;

export default CustomRunComponent;
