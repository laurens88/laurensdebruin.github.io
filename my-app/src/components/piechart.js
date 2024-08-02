import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import styles from "../styles/pchart.module.css";

function PChart({ data, width, height }) {
  const [chartWidth, setChartWidth] = useState(width || 400);
  const [chartHeight, setChartHeight] = useState(height || 200);
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
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setChartWidth(width || screenWidth * 0.7);
        setChartHeight(height || screenWidth * 0.35);
      } else {
        setChartWidth(width || 400);
        setChartHeight(height || 200);
      }
    };

    handleResize();

    updateColors();
    window.addEventListener('resize', handleResize);

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [width, height]);

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
        width={chartWidth}
        height={chartHeight}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}

export default PChart;
