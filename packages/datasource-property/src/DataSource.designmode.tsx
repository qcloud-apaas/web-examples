import React from "react";
import properties from "./properties";
import { SDK } from "@qcloud-apaas/web-sdk";
import DataTable from "./DataTable";

const CustomDesignComponent = (props) => {
  const { dataSource, title } = props;
  // SDK转换文本值
  const titleStr = SDK.transMetaVal2PureVal(title);
  const { fields, entities, selectedEntity } = SDK.useDataSource(
    dataSource,
    {}
  ) as any;
  // eslint-disable-next-line no-console
  console.log(entities);
  // eslint-disable-next-line no-console
  const columns: any[] = fields.map((field) => ({
    key: field?.code,
    name: field?.name,
  }));
  const valueMap = columns.reduce((current, col) => {
    current[col.key] = `{${col.name}}`;
    return current;
  }, {});
  const records = new Array(5).fill(0).map(() => valueMap);
  return (
    <>
      <h3>{titleStr}</h3>
      <p>{selectedEntity?.name}</p>
      <DataTable columns={columns} records={records}></DataTable>
    </>
  );
};

CustomDesignComponent.properties = properties;

export default CustomDesignComponent;
