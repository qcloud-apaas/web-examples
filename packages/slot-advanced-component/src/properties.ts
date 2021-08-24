import { PanelConfig } from "@qcloud-apaas/web-sdk";
import Cols from "./Cols";

const config: PanelConfig = {
  fields: [
    {
      label: "组件ID",
      key: "compId",
      type: "string",
      component: "InputString",
    },
    {
      label: "列设置",
      key: "cols",
      type: "object",
      defaultValue: [
        {
          id: "first",
          label: "列1",
        },
      ],
      component: Cols,
    },
  ],
  slots: [
    (props) => {
      const { cols = [] } = props;
      return cols.map((col, index) => ({
        slot: `cols[${index}].render`,
        key: col.id,
        component: "Stack",
      }));
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "cols"],
    },
  ],
};

export default config;
