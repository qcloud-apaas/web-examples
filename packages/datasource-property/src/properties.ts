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
      props: {
        // dataSource 将对象字段作为值传递
        includeFields: true,
        // 是否开启自动填充，设置为false，在选择对象后不会提示自动填充
        allowAutoFill: false,
      },
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "title", "placeholder", "dataSource"],
    },
  ],
};
