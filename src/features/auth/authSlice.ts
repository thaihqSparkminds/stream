import { createSlice } from '@reduxjs/toolkit';
import { User } from 'models';

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  isSendResetPass: boolean;
  alertFail: boolean | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  isSendResetPass: false,
  alertFail: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIsSendResetPass(state, action) {
      state.isSendResetPass = action.payload;
    },
    setForgotReset(state) {
      state.isSendResetPass = false;
    },
    setAlertFail(state, action) {
      state.alertFail = action.payload;
    },
  },
  extraReducers: {},
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const selectIsSendResetPass = (state: any) => state.auth.isSendResetPass;
export const selectStates = (state: any) => state.auth;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
