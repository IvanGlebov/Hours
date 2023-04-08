import { RootState } from '../../app/store'

export const isUserActive = (state: RootState) => state.user.active

export const getUserSettings = (state: RootState) => state.user.settings
