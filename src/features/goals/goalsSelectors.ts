import { RootState } from '../../app/store'

export const getMaxId = (state: RootState) =>
    Math.max(...([...state.goals.ids] as Array<number>))
export const getNewId = (state: RootState) =>
    state.goals.ids.length > 0
        ? Math.max(...([...state.goals.ids] as Array<number>)) + 1
        : 1

export const getGoals = (state: RootState) => state.goals.entities
