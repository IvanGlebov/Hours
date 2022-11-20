import React          from "react";
import styles                 from "./HeaderControls.module.css"
import { Button, IconButton } from "@mui/material";
import AddCircleIcon          from '@mui/icons-material/AddCircle';

const HeaderControls = () => {
  return (
    <div className={styles.container}>
      <IconButton color="primary" onClick={() => {
        console.log('Click')
      }}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <Button variant="outlined" size="large">Filters</Button>
    </div>
  )
}

export default HeaderControls;
