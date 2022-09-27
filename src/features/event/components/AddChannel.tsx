import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import userApi from 'api/userApi';
import youtubeApi from 'api/youtubeApi';
import TwitchLogo from 'components/Icons/TwitchLogo';
import YoutubeLogo from 'components/Icons/YoutubeLogo';
import { userDetailInformation } from 'models';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import OAuth2 from 'react-simple-oauth2-login';
import ChannelItem from './ChannelItem';

interface AddChannelProps {
  handleBack: () => void;
  handleClose: () => void;
  handleSelect: (value: string) => void;
}

const AddChannel: React.FunctionComponent<AddChannelProps> = ({
  handleBack,
  handleClose,
  handleSelect,
}) => {
  const onSuccess = (response: any) => console.log(response);
  const onFailure = (response: any) => console.error(response);
  const token = useRef(localStorage.getItem('token'));
  const sessionId = useRef(localStorage.getItem('sessionId'));
  const [userDetail, setUserDetail] = useState<userDetailInformation>();

  const handleClick = (value: string) => {
    if (value === 'youtube') {
      handleSelect('youtube');
      userDetail && createLiveStream(userDetail?.userId);
    }
  };

  const createLiveStream = useCallback(async (value: number) => {
    if (token.current) {
      const body = await youtubeApi.createLiveStream(value, token.current);
      if (body) console.log(body);
    }
  }, []);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = useCallback(async () => {
    if (sessionId.current && token.current) {
      const body = await userApi.getUserDetail(token.current, sessionId.current);
      if (body) {
        console.log(body);
        setUserDetail(body);
      }
    }
  }, []);

  return (
    <>
      <div className="event__create-container event__add-channel">
        <div className="event__create-header-box">
          <p>
            <LeftOutlined onClick={handleBack} className="event__back-btn" />
            Platforms
            <CloseOutlined onClick={handleClose} className="event__close-btn" />
          </p>
        </div>

        <div className="event__list-channel">
          <ChannelItem
            onClick={() => handleClick('youtube')}
            logo={<YoutubeLogo />}
            name={'YouTube'}
          />
          <OAuth2
            // authorizationUrl="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=,1"
            authorizationUrl="https://id.twitch.tv/oauth2/authorize"
            responseType="code"
            clientId="rk0qllr0498x2byb2twcy3u1mnubb3"
            redirectUri="http://localhost:8000/oauth_twitch&force_verify=true"
            scope={'channel:read:stream_key'}
            onSuccess={onSuccess}
            onFailure={onFailure}
            className={'event__channel'}
            isCrossOrigin={true}
          >
            <ChannelItem
              onClick={() => handleClick('twitch')}
              logo={<TwitchLogo />}
              name={'Twitch'}
            />
          </OAuth2>
        </div>
      </div>
    </>
  );
};

export default AddChannel;
