import { TwitchStreamResponse } from 'models/event/twitchStreamResponse';
import axiosClient from './axiosClient';

const eventApi = {
  getOAuthTwitch(): Promise<TwitchStreamResponse> {
    const url = `/oauth_twitch`;
    return axiosClient.get(url);
  },
};
export default eventApi;
