import { CloseOutlined, LeftOutlined, YoutubeFilled } from '@ant-design/icons';
import TwitchLogo from 'components/Icons/TwitchLogo';
import YoutubeLogo from 'components/Icons/YoutubeLogo';
import React from 'react';
import ChannelItem from './ChannelItem';

interface AddChannelProps {
  handleBack: () => void;
  handleClose: () => void;
}

const AddChannel: React.FunctionComponent<AddChannelProps> = ({ handleBack, handleClose }) => {
  return (
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
        <ChannelItem logo={<TwitchLogo />} name={'Twitch'} />
      </div>
    </div>
  );
};

export default AddChannel;
