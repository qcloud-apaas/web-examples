import React from "react";

const records = [
  ["a1", "a2", "a3", "a4", "a5"],
  ["b1", "b2", "b3", "b4", "b5"],
  ["c1", "c2", "c3", "c4", "c5"],
];
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
            {records.map((record, index) => {
              return (
                <tr key={index}>
                  {cols.map((col, index) => {
                    const value = record[index];
                    return (
                      <td style={{ padding: 10 }} key={col.id}>
                        {React.cloneElement(col.render, {
                          ...(col.render.props || {}),
                          value,
                          label: { type: 0, value },
                        })}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomRunComponent;
