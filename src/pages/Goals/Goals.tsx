import React, { useState } from "react";
import styles              from "./Goals.module.css";
import HeaderControls      from "../../components/HeaderControls/HeaderControls";
import { Goal }            from "../../components";

const Goals = () => {

  const [goals, setGoals] = useState([])

  return (
    <div className={styles.container}>
      <HeaderControls/>
      <div className={styles.splitContent}>
        <div className={styles.goalsTable}>
          <Goal/>
          <Goal/>
          <Goal/>
        </div>
        <div>content</div>
      </div>

    </div>
  )
}

export default Goals;
