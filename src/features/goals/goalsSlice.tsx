import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Goal }                             from "./types";

const goalsAdapter = createEntityAdapter<Goal>({})

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: goalsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addGoal: (state, { payload }) => {
      goalsAdapter.addOne(state, payload);

    },
    updateGoal: (state, { payload }) => {
      goalsAdapter.updateOne(state, payload);
    }

  }
})


export default goalsSlice.reducer;
