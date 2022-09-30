import { AxiosRequestConfig } from 'axios';
import { userDetailInformation } from 'models';
import { userRequest } from 'models/authentication/userRequest';
import axiosClient from './axiosClient';

const userApi = {
  getUserDetail(token: string, sessionId: string): Promise<userDetailInformation> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, sessionId: `${sessionId}` },
    };
    const url = `/user/user-details`;
    return axiosClient.get(url, config);
  },
};

export default userApi;
