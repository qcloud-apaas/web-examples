import { PanelConfig } from "@qcloud-apaas/web-sdk";

export default <PanelConfig>{
  fields: [
    {
      label: "组件 ID",
      key: "compId",
      type: "string",
      component: "InputString",
      props: {},
      validators: [
        {
          validator: (value) => !!value,
          message: "必填",
        },
      ],
    },
    {
      label: "表头",
      key: "title",
      type: "string",
      component: "InputString",
    },
    {
      label: "数据源",
      key: "dataSource",
      type: "dataSource",
      component: "DataSource",
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "title", "placeholder", "dataSource"],
    },
  ],
};
