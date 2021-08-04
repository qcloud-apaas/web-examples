import { PanelConfig } from "@qcloud-apaas/web-sdk";

export default <PanelConfig>{
  fields: [
    {
      label: "组件 ID",
      key: "compId",
      type: "string",
      component: "InputString",
    },
    {
      label: "按钮文案",
      key: "buttonText",
      type: "string",
      component: "InputString",
    },
    {
      label: "弹窗标题",
      key: "title",
      type: "string",
      component: "InputString",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "title", "buttonText"],
    },
  ],
};
