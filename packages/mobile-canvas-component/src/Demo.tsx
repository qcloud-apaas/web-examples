import React from "react";
import { SDK } from "@qcloud-apaas/web-sdk";
import { MuiField } from "@qcloud-apaas/mobile-ui/es/field";
import { Form, Input } from "antd";

const MobileDemo = () => {
  return <MuiField title="字段展示" name="label" placeholder="请输入" />;
};

const PCDemo = () => {
  return (
    <Form.Item label="字段展示">
      <Input />
    </Form.Item>
  );
};

export default (props) => {
  const { size, mode, pageCode } = SDK.useCanvas();
  const sizeText = {
    pc: "PC端",
    mobile: "移动端",
    pad: "Pad",
  }[mode];
  return (
    <div>
      <h3>当前画布为：{mode === "design" ? "设计态" : "运行态"}</h3>
      <p>当前页面ID: {pageCode}, 有一些场景你可能会用到</p>
      <p>当前终端尺寸: {sizeText}</p>
      {size === "mobile" ? (
        <MobileDemo {...props} mode={mode} />
      ) : (
        <PCDemo {...props} mode={mode}></PCDemo>
      )}
    </div>
  );
};
