import { AxiosRequestConfig } from 'axios';
import { LoginInformation, SignupInformation } from 'models';
import { LoginResponse } from 'models/authentication/loginResponse';
import { logoutRequest } from 'models/authentication/logoutRequest';
import { SignupResponse } from 'models/authentication/signupResponse';
import { HttpResponse } from 'models/http';
import axiosClient, { handleRequest } from './axiosClient';

const authApi = {
  login(body: LoginInformation): Promise<HttpResponse<LoginResponse>> {
    const url = `/auth/login`;
    return handleRequest(axiosClient.post(url, body));
  },

  logout(body: any, headers: AxiosRequestConfig<logoutRequest>): Promise<HttpResponse<any>> {
    const url = `/auth/logout`;
    return handleRequest(axiosClient.post(url, body, headers));
  },

  signup(body: SignupInformation): Promise<HttpResponse<SignupResponse>> {
    const url = `/auth/signup`;
    return handleRequest(axiosClient.post(url, body));
  },
};

export default authApi;
