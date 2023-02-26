import { RootState } from '../../app/store'

export const isUserActive = (state: RootState) => state.user.active
