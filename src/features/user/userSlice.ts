import { createSlice } from '@reduxjs/toolkit'
import { EElements, ESettingsNames, IUser } from './types'
import { ETimings } from '../../types/durations/timings'

const userInitialState: IUser = {
	name: '',
	email: '',
	settings: {
		[ESettingsNames.DEFAULT_ELEMENT]: EElements.GOAL,
		[ESettingsNames.DEFAULT_ELEMENT_TIMING]: ETimings.HOURS_PER_WEEK
	},
	active: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState: userInitialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.name = payload.name
			state.email = payload.email
		}
	}
})

export default userSlice.reducer

export const {

} = userSlice.actions
