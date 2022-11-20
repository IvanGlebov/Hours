import React                 from "react";
import styles                from "./Goal.module.css";
import { IconButton, Paper } from "@mui/material";
import CancelIcon            from '@mui/icons-material/Cancel';

const Goal = ({name, id, removeAction}: {name: string, id: number, removeAction: (id: number) => void}) => {
  return (
    <div>
      <Paper className={styles.paper} elevation={8}>
        <div className={styles.goalInnerWrapper}>
          <div className={styles.goalName}>
            {name}
          </div>
          <IconButton onClick={() => {removeAction(id)}}>
            <CancelIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  )
}
export default Goal;
