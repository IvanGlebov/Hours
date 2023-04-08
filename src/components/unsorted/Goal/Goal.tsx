import React from 'react'
import styles from './Goal.module.css'
import { IconButton, Paper } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

const Goal = (
    props: {
        id: number, name: string, removeAction?: (id: number) => void
    }) => {
    return (
        <div>
            <Paper className={styles.paper} elevation={8}>
                <div className={styles.goalInnerWrapper}>
                    <div className={styles.goalName}>
                        {props.name}
                    </div>
                    {props.removeAction && (
                        <IconButton
                            onClick={() => {
                                if (props.removeAction !== undefined) {
                                    props.removeAction(props.id)
                                }
                            }}>
                            <CancelIcon/>
                        </IconButton>
                    )}

                </div>
            </Paper>
        </div>
    )
}
export default Goal
