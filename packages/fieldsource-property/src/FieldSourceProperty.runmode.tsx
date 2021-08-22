import React, { useEffect, useState } from "react";
import Charts from "./Charts";
import { SDK } from "@qcloud-apaas/web-sdk";

const CustomRunComponent = (props) => {
  const { dataSource = {}, xField = {}, yField = {}, title } = props;
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const { fetchData } = SDK.useDataSource(dataSource);
  useEffect(() => {
    const { type } = dataSource;
    const { code: xFieldCode } = xField;
    const { code: yFieldCode } = yField;
    fetchData()
      .then((res) => {
        if (type === "database") {
          // 以数据库作为数据源
          const { databaseResponse } = res;
          const { records } = databaseResponse;
          setXData(records.map((record) => record.fieldValueMap[xFieldCode]));
          setYData(records.map((record) => record.fieldValueMap[yFieldCode]));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [xField, yField, dataSource, fetchData]);
  return <Charts xData={xData} yData={yData} title={title}></Charts>;
};

export default CustomRunComponent;
