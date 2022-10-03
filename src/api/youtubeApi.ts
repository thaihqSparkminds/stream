import { YoutubeChannelInfo } from 'models/event/youtubeChannelInfo';
import { YoutubeCreateStreamResponse } from 'models/event/youtubeCreateStreamResponse';
import axiosClient from './axiosClient';

const youtubeApi = {
  getChannelInfo(token: string, userId: number): Promise<YoutubeChannelInfo> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, userId: `${userId}` },
    };
    const url = `/youtube/channel-info`;
    return axiosClient.get(url, config);
  },

  createLiveStream(
    userId: number,
    token: string,
    channelId: string
  ): Promise<YoutubeCreateStreamResponse> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, userId: `${userId}`, channelId: `${channelId}` },
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
