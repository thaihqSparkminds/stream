import { DownOutlined, UpOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useAppSelector } from 'app/hooks';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import twitchLogo from 'assets/images/twitch_logo.png';
import { CreateInformation1 } from 'models/event/createInformation1';
import React, { useRef, useState } from 'react';
import { selectStates } from '../eventSlice';
import ScheduleCard from './ScheduleCard';

interface EventManageProps {
  handleCreate: () => void;
  formResult: CreateInformation1;
  handleRtmp: (e: string) => void;
  handleEmbed: () => void;
  handleEdit: () => void;
  handleDelete: (e: string) => void;
}

const EventManage: React.FunctionComponent<EventManageProps> = ({
  handleCreate,
  formResult,
  handleRtmp,
  handleEmbed,
  handleEdit,
  handleDelete,
}) => {
  const [dropdown, setDropdown] = useState(true);
  // const [youtubeEvent, setYoutubeEvent] = useState(localStorage.getItem('youtube') || '0');
  // const [twitchEvent, setTwitchEvent] = useState(localStorage.getItem('twitch') || '0');
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="event__main">
      <div className="event__header">
        <span className="event__title">Events</span>
        <Button onClick={handleCreate} className="event__create-btn" type="primary" size="large">
          + Create Event
        </Button>
      </div>

      <ScheduleCard
        avatar={ytbAvatar}
        logo={<YoutubeFilled />}
        formResult={formResult}
        handleEmbed={handleEmbed}
        handleEdit={handleEdit}
        handleDelete={() => handleDelete('youtube')}
        handleRtmp={() => handleRtmp('youtube')}
        live
      />
      <ScheduleCard
        logo={
          <div>
            <img src={twitchLogo} alt="" />
          </div>
        }
        avatar={ytbAvatar}
        formResult={formResult}
        handleEmbed={handleEmbed}
        handleEdit={handleEdit}
        handleDelete={() => handleDelete('twitch')}
        handleRtmp={() => handleRtmp('twitch')}
      />

      <p className="event__past-title" onClick={handleDropdown}>
        <span>Past Events</span>
        {!dropdown ? <DownOutlined /> : <UpOutlined />}
      </p>
      {dropdown && <div className="event__past-history">You have no events in your history.</div>}
    </div>
  );
};

export default EventManage;
