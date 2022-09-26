import { CloseOutlined, LeftOutlined, YoutubeFilled } from '@ant-design/icons';
import eventApi from 'api/eventApi';
import TwitchLogo from 'components/Icons/TwitchLogo';
import YoutubeLogo from 'components/Icons/YoutubeLogo';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import ChannelItem from './ChannelItem';
import NewWindow from 'react-new-window';

interface AddChannelProps {
  handleBack: () => void;
  handleClose: () => void;
}

// window.addEventListener('click', (e) => {
//   console.log(e.target);
// });

const AddChannel: React.FunctionComponent<AddChannelProps> = ({ handleBack, handleClose }) => {
  const navigate = useNavigate();
  const [showWin, setShowWin] = useState(false);
  const handleClick = (value: string) => {
    if (value === 'twitch') {
      setShowWin(true);
    }
  };
  const onSuccess = (response: any) => console.log(response);
  const onFailure = (response: any) => console.error(response);
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

        {/* {showTwitchTab && (
          <NewWindow
            name={'twitch'}
            title={'twitch'}
            url="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=,1"
          ></NewWindow>
        )} */}

        <div className="event__list-channel">
          <ChannelItem
            onClick={() => handleClick('youtube')}
            logo={<YoutubeLogo />}
            name={'YouTube'}
          />
          <a href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=,1">
            <ChannelItem
              onClick={() => handleClick('twitch')}
              logo={<TwitchLogo />}
              name={'Twitch'}
            />
          </a>
        </div>
      </div>
      <div className="event__list-channel">
        <ChannelItem
          onClick={() => handleClick('youtube')}
          logo={<YoutubeLogo />}
          name={'YouTube'}
        />
        {/* <ChannelItem onClick={() => handleClick('twitch')} logo={<TwitchLogo />} name={'Twitch'} /> */}
        <OAuth2Login
          // authorizationUrl="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=,1"
          // authorizationUrl="https://id.twitch.tv/oauth2/authorize"
          // responseType="code"
          // clientId="rk0qllr0498x2byb2twcy3u1mnubb3"
          // redirectUri="http://localhost:8000/oauth_twitch&force_verify=true"
          // scope={'channel:read:stream_key'}
          authorizationUrl="https://accounts.google.com/o/oauth2/v2/auth"
          responseType="token"
          clientId="31486186654-gqqtlra1bdjf50mp3m1rjm9ekpglegir.apps.googleusercontent.com"
          redirectUri="https://62dsg.csb.app"
          scope="openid email profile"
          onSuccess={onSuccess}
          onFailure={onFailure}
          isCrossOrigin={true}
        >
          <ChannelItem
            onClick={() => handleClick('twitch')}
            logo={<TwitchLogo />}
            name={'Twitch'}
          />
        </OAuth2Login>
      </div>
    </>
  );
};

export default AddChannel;
