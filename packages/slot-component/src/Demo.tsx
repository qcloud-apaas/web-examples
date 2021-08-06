import React from "react";
import "antd/es/form/style/index.css";
import "antd/es/input/style/index.css";
import "./style.scss";

export default (props) => {
  const { left, right } = props;
  return (
    <div>
      <h3>当前容器：</h3>
      <div className="example__versus">
        <div className="example__versus-item">{left}</div>

        {/* 修改节点props */}

        <div className="vs">VS</div>

        <div className="example__versus-item">{right}</div>
      </div>
    </div>
  );
};
