import React from "react";
import properties from "./properties";

const CustomRunComponent = (props) => {
  const { cols } = props;

  return (
    <div>
      <h4>表格</h4>
      <div style={{ overflow: "auto" }}>
        <table style={{ width: cols.length * 160 }}>
          <thead>
            <tr>
              {cols.map((col) => {
                return (
                  <th style={{ padding: 10, width: 160 }} key={col.id}>
                    {col.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {cols.map((col) => {
                return (
                  <td style={{ padding: 10 }} key={col.id}>
                    {col.render}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CustomRunComponent.properties = properties;

export default CustomRunComponent;
