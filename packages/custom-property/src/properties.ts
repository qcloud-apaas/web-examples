import { PanelConfig } from "@qcloud-apaas/web-sdk";
import Slider from "./Slider";

export default <PanelConfig>{
  fields: [
    {
      label: "组件 ID",
      key: "compId",
      type: "string",
      component: "InputString",
    },
    {
      label: "默认音量",
      key: "defaultVolume",
      type: "number",
      component: Slider,
    },
    {
      label: "默认亮度",
      key: "defaultBright",
      type: "number",
      component: Slider,
    },
  ],
  groups: [
    {
      title: "基本属性",
      items: ["compId", "defaultVolume", "defaultBright"],
    },
  ],
};
