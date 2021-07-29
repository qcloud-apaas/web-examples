import React from "react";

export default (props) => {
  const { records, columns } = props;
  return (
    <table className="example-datasource">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
