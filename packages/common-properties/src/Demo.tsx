import React from 'react';

interface ComponentProps {
  name: string;
  sex: string;
  age: number;
  hobbies: string;
  expression: string;
  eventHandler: string;
  customComp: string;
}
export default (props: ComponentProps) => {
  // return <div>{JSON.stringify(props, null, 2)}</div>;
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>属性</th>
          <th style={{ width: '90%' }}>值</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(props).map(([key, value]) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{JSON.stringify(value)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
