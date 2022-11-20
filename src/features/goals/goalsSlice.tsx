import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Item }                             from "./types";

const itemsAdapter = createEntityAdapter<Item>({})

export const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {

  }
})
