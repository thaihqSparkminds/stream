import { ForgotInformation, LoginInformation, SignupInformation } from 'models';
import { LoginResponse } from 'models/authentication/loginResponse';
import { SignupResponse } from 'models/authentication/signupResponse';
import axiosClient from './axiosClient';

const authApi = {
  login(body: LoginInformation): Promise<LoginResponse> {
    const url = `/auth/login`;
    return axiosClient.post(url, body);
  },

  logout(token: string, sessionId: string): Promise<any> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, 'X-Session-Id': `${sessionId}` },
    };
    const url = `/auth/logout`;
    return axiosClient.post(url, {}, config);
  },

  signup(body: SignupInformation): Promise<SignupResponse> {
    const url = `/auth/signup`;
    return axiosClient.post(url, body);
  },

  resetPassword(body: ForgotInformation): Promise<any> {
    const url = `/auth/reset-password`;
    return axiosClient.post(url, body);
  },
};

export default authApi;
