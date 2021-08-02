import React, { useState, useEffect } from "react";
import { SDK } from "@qcloud-apaas/web-sdk";
import Charts from "./Charts";
import properties from "./properties";

const CustomRunComponent = (props) => {
  const { dataSource = {}, xField, yField, title } = props;
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const titleStr = SDK.transMetaVal2PureVal(title);

  useEffect(() => {
    if (xField) {
      setXData(new Array(10).fill(0).map(() => `{${xField.apiKey}}`));
    }
    if (yField) {
      setYData(new Array(10).fill(0).map(() => Math.random() * 100));
    }
  }, [xField, yField]);
  if (!dataSource.entityCode || !xField || !yField) {
    return (
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "lightcyan",
          border: "1px solid lightblue",
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        暂无数据
      </div>
    );
  }
  return <Charts xData={xData} yData={yData} title={titleStr}></Charts>;
};

CustomRunComponent.properties = properties;
CustomRunComponent.defaultProps = {
  title: "示例图表",
};

export default CustomRunComponent;
