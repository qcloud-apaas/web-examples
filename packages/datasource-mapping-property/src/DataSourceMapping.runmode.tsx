import React, { useEffect, useState, useMemo } from "react";
import {
  SDK,
  DynamicDataSource,
  DataSourceResponse,
} from "@qcloud-apaas/web-sdk";
import Charts from "./Charts";

type ExampleProps = {
  title: string;
  dataSource: DynamicDataSource;
};

const CustomRunComponent = (props: ExampleProps) => {
  const { dataSource, title } = props;
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const { type } = dataSource;
    SDK.fetchByDataSource<DataSourceResponse>(dataSource)
      .then((res) => {
        console.log(res);
        if (type === "database") {
          // 以数据库作为数据源
          const { databaseResponse } = res;
          const { records } = databaseResponse;
          setRecords(
            records
              .map((record) => record.fieldValueMap)
              .sort((a, b) => a.createdTime - b.createdTime)
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dataSource]);
  return <Charts title={title} records={records}></Charts>;
};

export default CustomRunComponent;
