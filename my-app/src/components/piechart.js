import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import styles from "../styles/pchart.module.css";

function PChart({ data, width, height }) {
  const [chartColors, setChartColors] = useState([]);

  const updateColors = () => {
    const rootStyle = getComputedStyle(
      document.querySelector(`.${styles.chart}`)
    );
    const color1 = rootStyle.getPropertyValue("--color-1").trim();
    const color2 = rootStyle.getPropertyValue("--color-2").trim();

    setChartColors([color1, color2]);
  };

  useEffect(() => {
    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.chart}>
      <PieChart
        colors={chartColors}
        series={[
          {
            data: data,
            labelKey: "id",
            valueKey: "value",
          },
        ]}
        width={width}
        height={height}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}

export default PChart;
