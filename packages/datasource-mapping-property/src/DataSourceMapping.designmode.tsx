import React from "react";
import { SDK } from "@qcloud-apaas/web-sdk";
import Charts from "./Charts";
import properties from "./properties";

const exampleRecords = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
].map((m, i) => ({
  id: i,
  exam: m,
  math: Math.round(Math.random() * 100),
  chinese: Math.round(Math.random() * 40 + 60),
  english: Math.round(Math.random() * 50 + 50),
  physics: Math.round(Math.random() * 60 + 40),
  chemistry: Math.round(Math.random() * 70 + 30),
}));

const CustomRunComponent = (props) => {
  const { dataSource = {}, title } = props;
  const titleStr = SDK.transMetaVal2PureVal(title);

  if (!dataSource.entityCode || !dataSource.mapping) {
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
  return <Charts records={exampleRecords} title={titleStr}></Charts>;
};

CustomRunComponent.properties = properties;
CustomRunComponent.defaultProps = {
  title: "示例图表",
};

export default CustomRunComponent;
