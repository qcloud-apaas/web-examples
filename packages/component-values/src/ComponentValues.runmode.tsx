import React, { useEffect } from "react";
import { SDK } from "@qcloud-apaas/web-sdk";
import { Form } from "antd";
import "antd/es/form/style/index.css";

// SDK.useModel
// 传入当前组件的标识，可以获得一个成对的value 和 onChange

// SDK.useComponentSubscriber
// 传入一个组件的唯一标识，可以创建对这个组件的监听
// 注：当对方组件变化时，会触发当前组件的重新渲染

const CustomRunComponent = (props) => {
  const { compId, priceComponent, countComponent, visibleComponent } = props;
  const { value, onChange } = SDK.useModel(compId, {
    initialValue: 0,
  });
  // 获取单价的值
  const { value: price } =
    SDK.useComponentSubscriber(priceComponent?.compId) || {};
  // 获取数量的值
  const { value: count } =
    SDK.useComponentSubscriber(countComponent?.compId) || {};
  // 获取是否显示金额的值
  const { value: visible } =
    SDK.useComponentSubscriber(visibleComponent?.compId, (compState) => {
      // 这个回调函数会在visibleComponent组件的值变化时调用
      console.log("监听的组件当前的值为： ", compState);
    }) || {};

  useEffect(() => {
    const totalPrice = Number(price) * Number(count);
    const totalPriceNum = Number.isNaN(totalPrice) ? 0 : totalPrice;
    onChange(totalPriceNum);
  }, [price, count, onChange]);
  return <Form.Item label="总金额">{visible ? value : "***"}</Form.Item>;
};

export default CustomRunComponent;
