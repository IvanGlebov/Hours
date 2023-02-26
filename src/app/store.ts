import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import goalsReducer from '../features/goals/goalsSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
	reducer: {
		goals: goalsReducer,
		user: userReducer,
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
