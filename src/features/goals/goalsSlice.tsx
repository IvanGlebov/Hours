import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Goal }                             from './types'

const goalsAdapter = createEntityAdapter<Goal>({})

export const goalsSlice = createSlice({
	name: 'goals',
	initialState: goalsAdapter.getInitialState({
		status: 'idle'
	}),
	reducers: {
		addOneGoal: (state, { payload }) => {
			goalsAdapter.addOne(state, payload)
		},
		updateOneGoal: (state, { payload }) => {
			goalsAdapter.updateOne(state, payload)
		},
		setAllGoals: (state, { payload }) => {
			goalsAdapter.setMany(state, payload)
		},
		removeOneGoal: (state, { payload }: { payload: number }) => {
			goalsAdapter.removeOne(state, payload)
		}

	}
})


export default goalsSlice.reducer
export const {
	addOneGoal,
	updateOneGoal,
	setAllGoals,
	removeOneGoal
} = goalsSlice.actions
