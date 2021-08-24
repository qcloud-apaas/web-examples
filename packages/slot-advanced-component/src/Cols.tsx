import React, { useCallback } from "react";
import { Row, Col, Button, Input } from "antd";
import "antd/es/button/style/index.css";
import "antd/es/input/style/index.css";
import "antd/es/grid/style/index.css";

const genId = () => Date.now().toString(16);

export default (props) => {
  const { value = [], onChange } = props;
  const addColumn = useCallback(() => {
    const newCol = {
      id: genId(),
      label: `列${value.length + 1}`,
    };
    onChange([...value, newCol]);
  }, [value, onChange]);

  const removeColumn = useCallback(
    (id) => {
      onChange(value.filter((col) => col.id !== id));
    },
    [value, onChange]
  );

  const setColLabel = (index, e) => {
    const val = e.target.value;
    value[index].label = val;
    onChange([...value]);
  };

  return (
    <>
      {(value || []).map((col, index) => (
        <Row key={col.id}>
          <Col span={18}>
            <Input
              size="small"
              value={col.label}
              onChange={(e) => setColLabel(index, e)}
            ></Input>
          </Col>
          <Col span={6}>
            <Button icon="delete" onClick={() => removeColumn(col.id)}></Button>
          </Col>
        </Row>
      ))}
      <Button icon="plus" type="primary" onClick={addColumn}>
        添加列
      </Button>
    </>
  );
};
