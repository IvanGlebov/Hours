import React, { useState }    from 'react'
import styles                 from './HeaderControls.module.css'
import { Button, IconButton } from '@mui/material'
import AddCircleIcon          from '@mui/icons-material/AddCircle'
import { AddObjectModal }     from '../../index'

const HeaderControls = () => {

	const [open, setOpen] = useState(false)
	const toggle = () => {
		setOpen(!open)
		console.log('TOGGLE')
	}

	return (
		<div className={styles.container}>
			<IconButton color="primary" onClick={toggle}>
				<AddCircleIcon fontSize="large" />
			</IconButton>
			<Button variant="outlined" size="large">Filters</Button>
			<AddObjectModal open={open} toggle={toggle}/>
		</div>
	)
}

export default HeaderControls
