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
      label: "名称",
      key: "label",
      type: "string",
      component: "InputString",
    },
    {
      label: "值变化",
      key: "onChange",
      type: "event",
      component: "HandleEvent",
    },
    {
      label: "我的事件",
      tooltip: "可以在运行态，自行选择在任何位置触发",
      key: "onMyEventTrigger",
      type: "event",
      component: "HandleEvent",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "label", "placeholder"],
    },
    {
      title: "交互属性",
      items: ["onChange", "onMyEventTrigger"],
    },
  ],
};
