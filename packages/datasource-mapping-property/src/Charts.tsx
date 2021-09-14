import React, { useRef, useEffect } from "react";
import * as echarts from 'echarts';

export default (props) => {
  const { title, records } = props;
  const domRef = useRef();
  useEffect(() => {
    if (domRef.current) {
      const chartDom = domRef.current;
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: title,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["数学", "语文", "英语", "物理", "化学"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: records.map((r) => r.exam),
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "数学",
            type: "line",
            stack: "分数",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: records.map((r) => r.math),
          },
          {
            name: "语文",
            type: "line",
            stack: "分数",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: records.map((r) => r.chinese),
          },
          {
            name: "英语",
            type: "line",
            stack: "分数",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: records.map((r) => r.english),
          },
          {
            name: "物理",
            type: "line",
            stack: "分数",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: records.map((r) => r.physics),
          },
          {
            name: "化学",
            type: "line",
            stack: "分数",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: records.map((r) => r.chemistry),
          },
        ],
      };
      myChart.setOption(option);
    }
  }, [title, records]);

  return <div ref={domRef} style={{ minHeight: 400 }}></div>;
};
