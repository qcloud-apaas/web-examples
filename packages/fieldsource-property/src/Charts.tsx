import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

export default (props) => {
  const { xData, yData, title } = props;
  const domRef = useRef();
  useEffect(() => {
    if (xData.length > 0 && yData.length > 0) {
      const option = {
        xAxis: {
          type: "category",
          data: xData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: yData,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      const myChart = echarts.init(domRef.current);
      myChart.setOption(option);
    }
  }, [domRef, xData, yData]);
  return (
    <>
      <h2>{title}</h2>
      <div ref={domRef} style={{ height: 300 }}></div>
    </>
  );
};
