import React, { useState }  from "react";
import styles               from "./Goals.module.css";
import HeaderControls       from "../../components/HeaderControls/HeaderControls";
import { BarChart, Goal }                 from "../../components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getGoals }                       from "../../features/goals/goalsSelectors";
import { Goal as GoalType } from "../../features/goals/types";
import { removeOneGoal }    from "../../features/goals/goalsSlice";

const Goals = () => {

  const dispatch = useAppDispatch();

  const goalsEntities = useAppSelector(getGoals);

  const colors: Array<string> = ["#00916E", "#DDFDFE", "#F5CB5C", "#78CAD2", "#A1D2CE", "#AEC3B0", "#EFF6E0"];

  const selectColor = (elIndex: number) => {
    const index = elIndex % colors.length;
    return colors[index - 1 < 0 ? 0 : index - 1];
  }

  const removeGoal = (goalIndex: number) => {
    dispatch(removeOneGoal(goalIndex));
  }

  return (
    <div className={styles.container}>

      <div className={styles.splitContent}>
        <div>
          <HeaderControls/>
          <div className={styles.goalsTable}>
            {Object.values(goalsEntities).map((el) =>
              <Goal goal={el as GoalType} removeAction={removeGoal}/>
            )}
          </div>
        </div>

        <div className={styles.sideSection}>
          <h1>Overall</h1>
          <div className={styles.overallBar}>
            <BarChart itemsArray={
              Object.values(goalsEntities).map(
                (el) => {
                return {tooltip: el?.name as string, hours: el?.duration as number, color: selectColor(el?.id as number)}
              }
            )} maxSum={300}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Goals;
