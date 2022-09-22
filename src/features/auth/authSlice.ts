import { createSlice } from '@reduxjs/toolkit';
import { User } from 'models';

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  isSendResetPass: boolean;
  forgotEmail: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  isSendResetPass: false,
  forgotEmail: '',
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
    setForgotEmail(state, action) {
      state.forgotEmail = action.payload;
    },
    setForgotReset(state) {
      state.isSendResetPass = false;
      state.forgotEmail = '';
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
