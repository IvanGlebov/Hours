import React, { useState } from "react";
import styles              from "./Goals.module.css";
import HeaderControls      from "../../components/HeaderControls/HeaderControls";
import { BarChart, Goal }  from "../../components";

const Goals = () => {

  const [goals, setGoals] = useState([
    { color: "white", hours: 4, tooltip: "Goal 1" },
    { color: "gray", hours: 4, tooltip: "Goal 2" },
    { color: "blue", hours: 10, tooltip: "Goal 3" },
  ])

  const removeGoal = (goalIndex: number) => {
    const newGoals = goals.filter((el, index) => index !== goalIndex);
    setGoals(newGoals);
  }

  return (
    <div className={styles.container}>
      <HeaderControls/>
      <div className={styles.splitContent}>
        <div className={styles.goalsTable}>
          {goals.map((el) =>
            <Goal name={el.tooltip} removeAction={removeGoal}/>
          )}
        </div>
        <div className={styles.sideSection}>
          <h1>Overall</h1>
          <div className={styles.overallBar}>
            <BarChart itemsArray={goals} maxSum={20}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Goals;
