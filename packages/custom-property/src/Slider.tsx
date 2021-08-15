import React, { useEffect } from "react";
import { Slider } from "antd";
import { SDK } from "@qcloud-apaas/web-sdk";

export default (props) => {
  // 自动注入的value和onChange
  // label 属性的文本显示
  // fieldKey 属性的key
  const { label, fieldKey, value, onChange } = props;
  console.log(label);
  // 获取到当前组件的所有属性
  // 并可以修改属性
  const { properties, setProperties } = SDK.useProperties();
  useEffect(() => {
    if (value > 90) {
      setProperties({
        ...properties,
        lastMaxKey: fieldKey,
      });
    }
  }, [value]);
  return <Slider value={value} onChange={onChange}></Slider>;
};
