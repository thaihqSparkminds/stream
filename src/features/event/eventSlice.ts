import { createSlice } from '@reduxjs/toolkit';
import { CreateInformation1 } from 'models/event/createInformation1';
import { TwitchStreamResponse } from 'models/event/twitchStreamResponse';
import { YoutubeChannelInfo } from 'models/event/youtubeChannelInfo';
import { YoutubeCreateStreamResponse } from 'models/event/youtubeCreateStreamResponse';

export interface EventState {
  step: number;
  activeAll: boolean | undefined;
  formResult: CreateInformation1 | null;
  youtubeChannelInfo: YoutubeChannelInfo | null;
  youtubeCreateStream: YoutubeCreateStreamResponse | null;
  twitchStream: TwitchStreamResponse | null;
}

const initialState: EventState = {
  step: 0,
  activeAll: undefined,
  formResult: null,
  youtubeChannelInfo: null,
  youtubeCreateStream: null,
  twitchStream: null,
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
    setFormResult(state, action) {
      state.formResult = action.payload;
    },
    setYoutubeChannelInfo(state, action) {
      state.youtubeChannelInfo = action.payload;
    },
    setYoutubeCreateStream(state, action) {
      state.youtubeCreateStream = action.payload;
    },
    settwitchStream(state, action) {
      state.twitchStream = action.payload;
    },
  },
  extraReducers: {},
});

// Actions
export const eventActions = eventSlice.actions;

// Selectors
export const selectStep = (state: any) => state.event.step;
export const selectActiveAll = (state: any) => state.event.activeAll;
export const selectStates = (state: any) => state.event;

// Reducer
const eventReducer = eventSlice.reducer;
export default eventReducer;
