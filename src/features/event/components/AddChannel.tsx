import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import TwitchLogo from 'components/Icons/TwitchLogo';
import YoutubeLogo from 'components/Icons/YoutubeLogo';
import React from 'react';
import OAuth2 from 'react-simple-oauth2-login';
import ChannelItem from './ChannelItem';

interface AddChannelProps {
  handleBack: () => void;
  handleClose: () => void;
}

const AddChannel: React.FunctionComponent<AddChannelProps> = ({ handleBack, handleClose }) => {
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

        <div className="event__list-channel">
          <ChannelItem logo={<YoutubeLogo />} name={'YouTube'} />
          {/* <ChannelItem logo={<TwitchLogo />} name={'Twitch'} /> */}
          <OAuth2
            // authorizationUrl="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=,1"
            authorizationUrl="https://id.twitch.tv/oauth2/authorize"
            responseType="code"
            clientId="rk0qllr0498x2byb2twcy3u1mnubb3"
            redirectUri="http://localhost:8000/oauth_twitch&force_verify=true"
            scope={'channel:read:stream_key'}
            onSuccess={onSuccess}
            onFailure={onFailure}
          >
            <ChannelItem logo={<TwitchLogo />} name={'Twitch'} />
          </OAuth2>
        </div>
      </div>
    </>
  );
};

export default AddChannel;
