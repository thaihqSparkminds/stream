import { createSlice } from '@reduxjs/toolkit';

export interface EventState {
  step: number;
}

const initialState: EventState = {
  step: 0,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
  },
  extraReducers: {},
});

// Actions
export const eventActions = eventSlice.actions;

// Selectors
export const selectStep = (state: any) => state.event.step;

// Reducer
const eventReducer = eventSlice.reducer;
export default eventReducer;
