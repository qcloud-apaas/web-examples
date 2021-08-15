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
      label: "数据源",
      key: "dataSource",
      type: "dataSource",
      component: "DataSource",
    },
    {
      label: "选择字段",
      key: "fieldBinding",
      type: "fieldSource",
      component: "FieldSelect",
      props: {
        // useDataFormContext 默认值为true。表示默认FieldSelect会从表单上取DataSource
        // 如果entityCode和表单上下文同时存在时，将会以自身属性上的entityCode为准
        useDataFormContext: true,
      },
      useProps(fieldProps) {
        // 将dataSource上的entityCode, 联动赋值到fieldSource上来
        return {
          entityCode: fieldProps.dataSource?.entityCode,
        };
      },
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "title"],
    },
    {
      title: "数据属性",
      items: ["dataSource", "fieldBinding"],
    },
  ],
};
