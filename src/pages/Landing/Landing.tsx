import React from 'react'
import styles from './Landing.module.css'
import { Button } from '@mui/material'

const Landing: React.FC<unknown> = () => {
	return (
		<div >
			<div className={ styles.header }>
				<div className={ styles.logo }>Hours</div >
				<div className={ styles.actionButtons }>
					<Button
						variant="contained"
						color="primary"
						type="button"
					>Log In</Button >
					<Button
						variant="outlined"
						color="secondary"
						type="button"
					>Register</Button >
				</div >
			</div >
			<div className={ styles.content }>
				<section className={ styles.intro }>
					<h1 className={styles.introLogo}>HOURS</h1>
				</section >
				<section className={ styles.engagement }>
					<h2 >Somebody has calculated an average number of free
						time of a person with full-time job</h2 >
				</section >
			</div >
		</div >
	)
}

export default Landing
