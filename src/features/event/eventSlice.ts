import { createSlice } from '@reduxjs/toolkit';

export interface EventState {
  step: number;
  activeAll: boolean | undefined;
}

const initialState: EventState = {
  step: 0,
  activeAll: undefined,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setActiveAll(state, action) {
      state.activeAll = action.payload;
    },
  },
  extraReducers: {},
});

// Actions
export const eventActions = eventSlice.actions;

// Selectors
export const selectStep = (state: any) => state.event.step;
export const selectActiveAll = (state: any) => state.event.activeAll;

// Reducer
const eventReducer = eventSlice.reducer;
export default eventReducer;
