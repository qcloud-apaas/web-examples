import { PanelConfig } from "@qcloud-apaas/web-sdk";

const config: PanelConfig = {
  fields: [
    {
      label: "组件ID",
      key: "compId",
      type: "string",
      component: "InputString",
    }
  ],
  slots: [
    { slot: "left", component: "Stack", props: {}, children: [] },
    { slot: "right", component: "Stack", props: {}, children: [] },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId"],
    },
  ],
};

export default config;
