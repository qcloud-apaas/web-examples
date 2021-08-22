import React, { useEffect, useState, useRef } from "react";
import { SDK, DynamicDataSource } from "@qcloud-apaas/web-sdk";
import Charts from "./Charts";

type ExampleProps = {
  title: string;
  dataSource: DynamicDataSource;
};

const CustomRunComponent = (props: ExampleProps) => {
  const { dataSource, title } = props;
  const [records, setRecords] = useState([]);
  const { fetchData } = SDK.useDataSource(dataSource);
  useEffect(() => {
    const { type } = dataSource;
    fetchData()
      .then((res) => {
        console.log(res);
        if (type === "database") {
          // 以数据库作为数据源
          const { databaseResponse } = res;
          const { records } = databaseResponse;
          setRecords(
            records
              .map((record) => record.fieldValueMap) // 获取recordValues
              .sort((a, b) => a.createdTime - b.createdTime) // 按时间排序
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dataSource, fetchData]);
  return <Charts title={title} records={records}></Charts>;
};

export default CustomRunComponent;
