import React       from "react";
import styles      from "./BarChart.module.css";
import { Tooltip } from "@mui/material";

export type Point = {
  color: string,
  hours: number,
  tooltip: string,
}

interface InputProps {
  itemsArray: Array<Point>,
  maxSum: number,
}

const BarChart = (props: InputProps) => {
  return (
    <div className={styles.barWrapper}>
      {props.itemsArray.map((el) => (
        <Tooltip title={el.tooltip + ` (${el.hours}/${props.maxSum})`} placement="left">
          <div style={{
            height: `${el.hours / props.maxSum * 100}%`,
            backgroundColor: el.color,
          }}/>
        </Tooltip>
      ))}
    </div>
  )
}

export default BarChart;
