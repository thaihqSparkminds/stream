import { CloseOutlined, LeftOutlined, SlidersTwoTone } from '@ant-design/icons';
import TwitchLogo from 'components/Icons/TwitchLogo';
import YoutubeLogo from 'components/Icons/YoutubeLogo';
import React, { useEffect, useRef, useState } from 'react';
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
  const [showTwitchTab, setShowTwitchTab] = useState(false);

  const handleClick = (value: string) => {
    // if (value === 'twitch') {
    //   var win = window.open(
    //     'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=,1',
    //     '_blank',
    //     'location=yes,height=900,width=570,scrollbars=yes,status=yes'
    //   );
    //   var winDocument = win?.document;
    //   if (winDocument) {
    //     alert(win?.screen.width);
    //   }
    // }
  };

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
    </>
  );
};

export default AddChannel;
