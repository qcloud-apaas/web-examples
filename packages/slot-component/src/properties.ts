import { PanelConfig } from "@qcloud-apaas/web-sdk";

const config: PanelConfig = {
  fields: [
    {
      label: "组件ID",
      key: "compId",
      type: "string",
      component: "InputString",
    },
    {
      label: "左节点",
      key: "left",
      type: "slot",
      component: "Slot",
    },
    {
      label: "右节点",
      key: "right",
      type: "slot",
      component: "Slot",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId"],
    },
    {
      title: "节点属性",
      items: ["left", "right"],
    },
  ],
};

export default config;
