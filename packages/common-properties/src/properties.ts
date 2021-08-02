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
      label: "昵称",
      key: "name",
      type: "string",
      component: "InputString",
      props: {
        autoComplete: "off",
        placeholder: "你是谁",
        defaultValue: "male",
      },
      validators: [
        {
          validator: (value) => value.length < 10,
          message: "昵称长度超出限制",
        },
      ],
    },
    {
      label: "性别",
      key: "sex",
      type: "string",
      component: "RadioGroup",
      props: {
        defaultValue: "male",
        options: [
          { label: "男", value: "male" },
          { label: "女", value: "female" },
        ],
      },
    },
    {
      label: "年龄",
      key: "age",
      type: "number",
      component: "InputNumber",
      props: { min: 12, max: 100 },
      validators: [
        {
          validator: (value) => value > 18 && value < 60,
          message: "必须介于 18 与 60 之间",
        },
      ],
    },
    {
      label: "文件大小",
      key: "fileSize",
      type: "string",
      component: "InputUnit",
      props: {
        unit: "个数",
      },
    },
    {
      label: "日期展示格式",
      key: "dateDisplay",
      type: "string",
      component: "DateDisplay",
      props: {},
    },
    {
      label: "兴趣",
      key: "hobbies",
      type: "array",
      component: "CheckboxGroup",
      props: {
        options: [
          { label: "编程", value: "code" },
          { label: "抠图", value: "web" },
          { label: "超越", value: "jinli" },
        ],
      },
    },
    {
      label: "开关",
      key: "switcher",
      type: "string",
      component: "Switch",
      props: {},
    },

    {
      label: "渲染方式",
      key: "rendering",
      type: "string",
      component: "Select",
      props: {
        options: [
          {
            text: "正文",
            value: "text",
          },
          {
            text: "标题1",
            value: "H1",
          },
          {
            text: "标题2",
            value: "H2",
          },
          {
            text: "标题3",
            value: "H3",
          },
          {
            text: "标题4",
            value: "H4",
          },
          {
            text: "标题5",
            value: "H5",
          },
          {
            text: "标题6",
            value: "H6",
          },
        ],
      },
    },
    {
      label: "自定义校验",
      key: "verifyFields",
      type: "object",
      component: "VerifyFields",
      useProps: (item) => {
        return { fieldSource: item.fieldSource };
      },
      props: {
        origin: "enum", // 可选择 enum(枚举)  group（实数 评分组）   date（日期）  cascader（及联选择器） relation（关联关系） parentShip（主子关系） text（文本） integer（整数）  decimal（实数）
      },
    },
    {
      label: "校验规则",
      key: "verifiableRule",
      type: "string",
      component: "Select",
      props: {
        defaultValue: "no",
        options: [
          {
            text: "无校验",
            value: "no",
          },
          {
            text: "必填",
            value: "required",
          },
        ],
      },
    },
    {
      label: "错误提示",
      key: "errorMsg",
      type: "string",
      component: "InputString",
      // 当useVisible函数返回true时，当前属性才展示
      useVisible: (fieldProps) => fieldProps.verifiableRule === "str(required)",
      props: {
        autoComplete: "off",
        placeholder: "",
        defaultValue: "",
      },
    },
    {
      label: "默认值",
      key: "defaultValue",
      type: "defaultValue",
      component: "DefaultValue",
      props: {},
    },
    {
      label: "动作编辑器",
      key: "actionList",
      type: "actionList",
      component: "ActionList",
      props: {},
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: [
        "compId",
        "name",
        "sex",
        "age",
        "hobbies",
        "fileSize",
        "switcher",
        "rendering",
        "dateDisplay",
      ],
    },
    {
      title: "数据属性",
      items: ["defaultValue", "verifiableRule", "errorMsg", "verifyFields"],
    },
    { title: "交互属性", items: ["actionList"] },
  ],
};

export default config;
