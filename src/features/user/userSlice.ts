import { createSlice } from '@reduxjs/toolkit'
import { EElements, ESettingsNames, IUser } from './types'
import { EDurations, ETimings } from '../../types/durations/timings'

const userInitialState: IUser = {
    name: '',
    email: '',
    settings: {
        [ESettingsNames.DEFAULT_ELEMENT]: EElements.GOAL,
        [ESettingsNames.DEFAULT_ELEMENT_TIMING]: ETimings.HOURS_PER_WEEK,
        [ESettingsNames.DEFAULT_GAP_DURATION]: EDurations.HOURS_PER_WEEK,
        [ESettingsNames.TOTAL_YEAR_DURATION]: 312,
        [ESettingsNames.DURATION]: 6
    },
    active: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.name
            state.email = payload.email
            state.active = true
        },
        logOutUser: (state) => {
            state.active = false
            state.name = userInitialState.name
            state.email = userInitialState.email
            state.settings = userInitialState.settings
        },
        setSettings: (state, { payload }: { payload: IUser['settings'] }) => {
            state.settings = payload
        },
        setTotalYearDuration: (state, { payload }: { payload: number }) => {
            state.settings.TOTAL_YEAR_DURATION = payload
        },
        setDurationSetting: (state, { payload }: { payload: number }) => {
            state.settings.DURATION = payload
        },
        setDefaultElementTiming: (state, { payload }: { payload: string }) => {
            state.settings.DEFAULT_ELEMENT_TIMING = payload
        }
    }
})

export default userSlice.reducer

export const {
    setUser,
    logOutUser,
    setTotalYearDuration,
    setDurationSetting,
    setDefaultElementTiming
} = userSlice.actions
