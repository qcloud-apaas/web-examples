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
      label: "单价组件",
      key: "priceComponent",
      type: "componentSelect",
      component: "ComponentSelect",
    },
    {
      label: "数量组件",
      key: "countComponent",
      type: "componentSelect",
      component: "ComponentSelect",
    },
    {
      label: "是否显示金额",
      key: "visibleComponent",
      type: "componentSelect",
      component: "ComponentSelect",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "priceComponent", "countComponent", "visibleComponent"],
    },
  ],
};
