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
      label: "表头",
      key: "title",
      type: "string",
      component: "InputString",
    },
    {
      label: "选择字段",
      tooltip: "选择柱状图纵轴字段",
      key: "fieldBinding",
      type: "fieldSource",
      component: "FieldSelect",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "title"],
    },
    {
      title: "数据属性",
      items: ["fieldBinding"],
    },
  ],
};
