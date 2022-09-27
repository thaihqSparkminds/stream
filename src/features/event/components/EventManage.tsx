import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { CreateInformation1 } from 'models/event/createInformation1';
import React, { useRef, useState } from 'react';
import ScheduleCard from './ScheduleCard';

interface EventManageProps {
  handleCreate: () => void;
  formResult: CreateInformation1;
  handleRtmp: () => void;
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
  const youtubeNum = useRef(Number(localStorage.getItem('youtube')));
  const twitchNum = useRef(Number(localStorage.getItem('twitch')));
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

      {Array.from(Array(youtubeNum)).map((item, index) => (
        <ScheduleCard
          avatar={ytbAvatar}
          formResult={formResult}
          handleEmbed={handleEmbed}
          handleEdit={handleEdit}
          handleDelete={() => handleDelete('youtube')}
          handleRtmp={handleRtmp}
        />
      ))}
      {Array.from(Array(twitchNum)).map((item, index) => (
        <ScheduleCard
          avatar={ytbAvatar}
          formResult={formResult}
          handleEmbed={handleEmbed}
          handleEdit={handleEdit}
          handleDelete={() => handleDelete('twitch')}
          handleRtmp={handleRtmp}
        />
      ))}

      {/* <ScheduleCard
        avatar={ytbAvatar}
        formResult={formResult}
        handleEmbed={handleEmbed}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleRtmp={handleRtmp}
        live
      /> */}

      <p className="event__past-title" onClick={handleDropdown}>
        <span>Past Events</span>
        {!dropdown ? <DownOutlined /> : <UpOutlined />}
      </p>
      {dropdown && <div className="event__past-history">You have no events in your history.</div>}
    </div>
  );
};

export default EventManage;
