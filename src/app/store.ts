import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import landingReducer from 'features/landing/landingSlice';
import staticReducer from 'features/static/staticSlice';
import eventReducer from 'features/event/eventSlice';

export const store = configureStore({
  reducer: {
    landing: landingReducer,
    auth: authReducer,
    static: staticReducer,
    event: eventReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
