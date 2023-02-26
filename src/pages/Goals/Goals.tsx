import React                              from 'react'
import styles                             from './Goals.module.css'
// eslint-disable-next-line max-len
import HeaderControls                     from '../../components/unsorted/HeaderControls/HeaderControls'
import { BarChart, Goal }                 from '../../components'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
// eslint-disable-next-line max-len
import { getGoals }                       from '../../features/goals/goalsSelectors'
import { removeOneGoal }                  from '../../features/goals/goalsSlice'

const Goals: React.FC = () => {

	const dispatch = useAppDispatch()

	const goalsEntities = useAppSelector(getGoals)

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

	return (
		<div className={styles.container}>

			<div className={styles.splitContent}>
				<div>
					<HeaderControls />
					<div className={styles.goalsTable}>
						{Object.values(goalsEntities).map((el) =>
							<Goal
								name={el?.name as string}
								key={el?.id}
								id={el?.id as number}
								removeAction={removeGoal}
							/>
						)}
					</div>
				</div>

				<div className={styles.sideSection}>
					<h1>Overall</h1>
					<div className={styles.overallBar}>
						<div>
              Time for projects
              Time for
						</div>
						<BarChart itemsArray={
							Object.values(goalsEntities).map(
								(el) => {
									return {
										tooltip: el?.name as string,
										hours: el?.duration as number,
										color: selectColor(el?.id as number)
									}
								}
							)} maxSum={300}/>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Goals
