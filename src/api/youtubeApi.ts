import { YoutubeChannelInfo } from 'models/event/youtubeChannelInfo';
import { YoutubeCreateStreamResponse } from 'models/event/youtubeCreateStreamResponse';
import { HttpResponse } from 'models/http';
import axiosClient from './axiosClient';

const youtubeApi = {
  getChannelInfo(token: string, accessToken: string): Promise<YoutubeChannelInfo> {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        accessToken: `${accessToken}`,
      },
    };
    const url = `/youtube/channel-info`;
    return axiosClient.get(url, config);
  },

  createLiveStream(
    userId: number,
    token: string,
    accessToken: string
  ): Promise<YoutubeCreateStreamResponse> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, userId: `${userId}` },
      data: {
        accessToken: `${accessToken}`,
      },
    };
    const url = `/youtube/create-live-streams`;
    return axiosClient.get(url, config);
  },

  getLinkOAuth(userId: number, token: string): Promise<string> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, userId: `${userId}` },
    };
    const url = `/youtube/oauth-youtube`;
    return axiosClient.get(url, config);
  },
};

export default youtubeApi;
