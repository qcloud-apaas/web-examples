import React from "react";

import { Slider } from "tea-component";
import { SDK } from "@qcloud-apaas/web-sdk";

const CustomRunComponent = (props) => {
  // 从属性文件中获取值
  const { compId, defaultVolume, defaultBright } = props;
  // 
  const marks = [{ value: 0 }, { value: 20 }, { value: 50 }, { value: 100 }];
  const { value, onChange } = SDK.useModel(compId, {
    initialValue: [defaultVolume, defaultBright],
  });
  const [volume, bright] = value;
  return (
    <>
      <section style={{ padding: "0.26rem" }}>
        音量：<Slider
          min={0}
          max={100}
          value={volume}
          onChange={(val)=>onChange([val,bright])}
        />
        亮度：<Slider
          min={0}
          max={100}
          value={bright}
          onChange={(val)=>onChange([volume,val])}
        />
      </section>
    </>
  );
};

export default CustomRunComponent;
