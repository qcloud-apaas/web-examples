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
      label: "图表数据源",
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
    // 字段选择
    {
      label: "横轴字段",
      tooltip: "选择柱状图横轴字段",
      key: "xField",
      type: "fieldSource",
      component: "FieldSelect",
      useProps(fieldProps) {
        // 将dataSource上的entityCode, 联动赋值到fieldSource上来
        return {
          entityCode: fieldProps.dataSource?.entityCode,
        };
      },
    },
    // 字段选择
    {
      label: "纵轴字段",
      tooltip: "选择柱状图纵轴字段",
      key: "yField",
      type: "fieldSource",
      component: "FieldSelect",
      useProps(fieldProps) {
        // 将dataSource上的entityCode, 联动赋值到fieldSource上来
        return {
          entityCode: fieldProps.dataSource?.entityCode,
        };
      },
    },
    // 字段多选
    {
      label: "多选字段",
      key: "multiFields",
      type: "fieldSource",
      component: "FieldSelect",
      props: {
        multiple: true, // 字段多选
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
      items: ["compId", "title", "placeholder"],
    },
    {
      title: "数据属性",
      items: ["dataSource", "xField", "yField", "multiFields"],
    },
  ],
};
