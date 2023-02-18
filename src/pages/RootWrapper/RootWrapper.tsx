import React, { useEffect } from 'react'
import { Outlet }           from 'react-router'
import { Navbar }           from '../../components'
import { useAppDispatch }   from '../../app/hooks'
import { addOneGoal }       from '../../features/goals/goalsSlice'
import '../../App.css'

const RootWrapper = () => {

	const dispatch = useAppDispatch()

	// Adding initial store goals as a filler;
	useEffect(() => {
		dispatch(addOneGoal({
			id: 1, name: 't1', description: 'descr', duration: 4
		}))
		dispatch(addOneGoal({
			id: 2, name: 't2', description: 'descr', duration: 4
		}))
		dispatch(addOneGoal({
			id: 3, name: 't3', description: 'descr', duration: 4
		}))
		dispatch(addOneGoal({
			id: 4, name: 't4', description: 'descr', duration: 4
		}))
	}, [])

	return (
		<div className="App">
			<Navbar />
			<Outlet />
		</div>
	)
}

export default RootWrapper
