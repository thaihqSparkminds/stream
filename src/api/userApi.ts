import { userDetailInformation } from 'models';
import { UserPlatform } from 'models/user/userPlatform';
import axiosClient from './axiosClient';

const userApi = {
  getUserDetail(token: string, sessionId: string): Promise<userDetailInformation> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, sessionId: `${sessionId}` },
    };
    const url = `/user/user-details`;
    return axiosClient.get(url, config);
  },

  getPlatfomUser(userId: number): Promise<UserPlatform[]> {
    const config = {
      headers: { userId: `${userId}` },
    };
    const url = `/user/platform`;
    return axiosClient.get(url, config);
  },
};

export default userApi;
