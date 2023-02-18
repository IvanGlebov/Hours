import React, { useState } from 'react'
import styles              from './Settings.module.css'
import { Slider }          from '@mui/material'
import { InlineSelect }    from '../../components'

const Settings = () => {

	const [duration, setDuration] = useState(200)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [gapDuration, setGapDuration] = useState(300)
	const selectOptions = ['hours / week', 'hours', 'hours / day']

	const onSelectUpdate = (e: string) => {
		switch (e) {
		case selectOptions[0]:
			setGapDuration(168)
			break
		case selectOptions[1]:
			setGapDuration(8760)
			break
		case selectOptions[2]:
			setGapDuration(24)
			break
		default:
			setGapDuration(300)
			break
		}
	}

	return (
		<div>
			<h1>Settings</h1>
			<div className={styles.itemsWrapper}>
				<div className={styles.settingsSection}>
					<h2>For <InlineSelect
						selectOptions={selectOptions}
						onChange={onSelectUpdate}/>
					<br/> during the whole year</h2>
					<div></div>
					<div className={styles.settingsItem}>

						<div>Full duration</div>
						<Slider
							value={duration}
							onChange={
								(e, value) => setDuration(value as number)
							}
							min={0}
							max={168}
							valueLabelDisplay="on"
						/>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Settings
