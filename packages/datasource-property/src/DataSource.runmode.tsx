import React, { useEffect, useState, useMemo } from "react";
import { SDK, DynamicDataSource } from "@qcloud-apaas/web-sdk";
import DataTable from "./DataTable";

type ExampleProps = {
  title: string;
  dataSource: DynamicDataSource;
};

const CustomRunComponent = (props: ExampleProps) => {
  const { dataSource, title } = props;
  const [tableRecords, setTableRecords] = useState([]);
  const [count, setCount] = useState(0);
  const columns = useMemo(
    () =>
      dataSource.fields.map((field) => ({
        key: field?.code,
        name: field?.name,
      })),
    [dataSource]
  );

  const { fetchData } = SDK.useDataSource(dataSource);
  // 或
  // -----------------------------------------
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SDK.useDataSource(dataSource, (fetchData) => {
    // 这个回调函数会在每次DataSource的参数变化时执行
    // 可以保证数据的动态刷新
    // 如筛选条件、流程入参
    console.log("数据源DataSource参数变化，请重新执行fetchData");
  });

  useEffect(() => {
    const { type, variableType } = dataSource;
    fetchData()
      .then((res) => {
        console.log(res);
        if (type === "database") {
          // 以数据库作为数据源
          const { databaseResponse } = res;
          const { records, total } = databaseResponse;
          setTableRecords(records.map((record) => record.fieldValueMap));
          setCount(total);
        } else if (type === "flow" && variableType === "objectList") {
          // 以流程作为数据源，并且选择的流程结束节点类型 为 对象列表类型
          const { flowResponse = [] } = res;
          const response = flowResponse.find(
            (item) => item.variableType === variableType
          );
          if (response && response.records) {
            const { records, total } = response;
            setTableRecords(records.map((record) => record.fieldValueMap));
            setCount(total);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dataSource, fetchData]);
  return (
    <>
      <h2>{title}</h2>
      <p>总计： {count}</p>
      <DataTable columns={columns} records={tableRecords}></DataTable>
    </>
  );
};

export default CustomRunComponent;
