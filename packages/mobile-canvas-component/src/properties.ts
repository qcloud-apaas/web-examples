import { PanelConfig } from "@qcloud-apaas/web-sdk";

const config: PanelConfig = {
  fields: [
    {
      label: "组件ID",
      key: "compId",
      type: "string",
      component: "InputString",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId"],
    },
  ],
};

export default config;
