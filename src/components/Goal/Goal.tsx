import React     from "react";
import styles    from "Goal.module.css";
import { Paper } from "@mui/material";

const Goal = () => {
  return (
    <Paper sx={{
      backgroundColor: "#23272f",
      width: "100%",
      color: "white",
      borderRadius: 4,
      height: 64,
      display: "flex",
      justifyContent: "left",
      alignItems: "center"
    }} elevation={8}>
      <div>
        Goal
      </div>
    </Paper>
  )
}
export default Goal;
