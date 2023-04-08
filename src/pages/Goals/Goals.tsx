/* eslint-disable max-len */
import React, { useMemo } from 'react'
import styles from './Goals.module.css'
// eslint-disable-next-line max-len
import HeaderControls
    from '../../components/unsorted/HeaderControls/HeaderControls'
import { BarChart, Goal } from '../../components'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
// eslint-disable-next-line max-len
import { getGoals } from '../../features/goals/goalsSelectors'
import { removeOneGoal } from '../../features/goals/goalsSlice'
import { getUserSettings } from '../../features/user/userSelectors'

const Goals: React.FC = () => {

    const dispatch = useAppDispatch()

    const goalsEntities = useAppSelector(getGoals)
    const userSettings = useAppSelector(getUserSettings)
    const colors: Array<string> = [
        '#00916E',
        '#DDFDFE',
        '#F5CB5C',
        '#78CAD2',
        '#A1D2CE',
        '#AEC3B0',
        '#EFF6E0'
    ]

    const selectColor = (elIndex: number) => {
        const index = elIndex % colors.length
        return colors[index - 1 < 0 ? 0 : index - 1]
    }

    const removeGoal = (goalIndex: number) => {
        dispatch(removeOneGoal(goalIndex))
    }

    const goalsArray = useMemo(() => Object.values(goalsEntities) || [], [goalsEntities])

    const spend = useMemo(() => {
        return Object
            .values(goalsEntities)
            .reduce((previousValue, currentValue) => previousValue +=
                currentValue?.duration || 0, 0)
    }, [goalsEntities])

    const averageGoalDuration = useMemo(() => {
        const summ = goalsArray.reduce((prev, next) => prev +=
            next?.duration || 0, 0)
        return summ / goalsArray.length
    }, [goalsArray])

    return (
        <div className={styles.container}>

            <div className={styles.splitContent}>
                <div>
                    <HeaderControls/>
                    <div className={styles.goalsTable}>
                        {goalsArray.map((el) =>
                            <Goal
                                name={el?.name as string}
                                key={el?.id}
                                id={el?.id as number}
                                removeAction={removeGoal}
                            />
                        )}
                        {goalsArray.length < 1 && (
                            <Goal
                                id={0}
                                key={0}
                                name="No goals. Add one by pressing Plus icon!"
                            />
                        )}
                    </div>
                </div>

                <div className={styles.sideSection}>
                    <h1>Stats</h1>
                    <div className={styles.sideSectionContent}>
                        <div className={styles.overallBar}>
                            <BarChart
                                itemsArray={
                                    goalsArray.map(
                                        (el) => {
                                            return {
                                                tooltip: el?.name as string,
                                                hours: el?.duration as number,
                                                color: selectColor(el?.id as number)
                                            }
                                        }
                                    )}
                                maxSum={userSettings.TOTAL_YEAR_DURATION as number}
                            />
                        </div>
                        <div className={styles.description}>
                            <h2>Timings</h2>
                            <div>Left: {userSettings.TOTAL_YEAR_DURATION as number - spend}/{userSettings.TOTAL_YEAR_DURATION}</div>

                            <h3>Some time later you will see hints here...</h3>
                            <h2>Goals</h2>
                            {goalsArray.length < 1 && (
                                <div>No goals to calculate stats</div>
                            )}
                            {goalsArray.length > 0 && (
                                <div>You
                                    have {goalsArray.length} goal{goalsArray.length > 1
                                    ? 's'
                                    : ''} with an
                                    average duration
                                    of {averageGoalDuration.toFixed(2)} hours</div>
                            )}
                            {/* TODO check 'pace' translation */}

                            {goalsArray.length > 0 && (
                                <>
                                    <h2>
                                        If you keep this pace during the whole
                                        year you will spend this much time on
                                        every goal:
                                    </h2>
                                    <div>
                                        {goalsArray
                                            .map((goal) => (
                                                <div key={goal?.id}>
                                                    {goal?.name}: {(goal?.duration || 1) * 48}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Goals
