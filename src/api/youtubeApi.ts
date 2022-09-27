import { YoutubeChannelInfo } from 'models/event/youtubeChannelInfo';
import { YoutubeCreateStreamResponse } from 'models/event/youtubeCreateStreamResponse';
import { HttpResponse } from 'models/http';
import axiosClient from './axiosClient';

const youtubeApi = {
  getChannelInfo(token: string): Promise<YoutubeChannelInfo> {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const url = `/youtube/oauth-youtube`;
    return axiosClient.get(url, config);
  },

  createLiveStream(
    userId: number,
    token: string
  ): Promise<HttpResponse<YoutubeCreateStreamResponse>> {
    const config = {
      headers: { Authorization: `Bearer ${token}`, userId: `${userId}` },
    };
    const url = `/youtube/create-live-streams`;
    return axiosClient.get(url, config);
  },
};

export default youtubeApi;
