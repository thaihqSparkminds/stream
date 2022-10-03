import { DownOutlined, UpOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useAppSelector } from 'app/hooks';
import twitchLogo from 'assets/images/twitch_logo.png';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { CreateInformation1 } from 'models/event/createInformation1';
import { UserPlatform } from 'models/user/userPlatform';
import React, { useState } from 'react';
import { selectEventStates } from '../eventSlice';
import ScheduleCard from './ScheduleCard';

interface EventManageProps {
  handleCreate: () => void;
  formResult: CreateInformation1;
  handleRtmp: (platformType: string, channelId: string) => void;
  handleEmbed: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
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
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const userPlatform = useAppSelector(selectEventStates).userPlatform;

  return (
    <div className="event__main">
      <div className="event__header">
        <span className="event__title">Events</span>
        <Button onClick={handleCreate} className="event__create-btn" type="primary" size="large">
          + Create Event
        </Button>
      </div>

      {userPlatform &&
        userPlatform.map((e: UserPlatform) => (
          <ScheduleCard
            avatar={e.image}
            logo={
              e.platformType === 'YOUTUBE' ? (
                <YoutubeFilled />
              ) : (
                <div>
                  <img src={twitchLogo} alt="" />
                </div>
              )
            }
            formResult={formResult}
            handleEmbed={handleEmbed}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleRtmp={() => handleRtmp(e.platformType, e.channelId)}
          />
        ))}

      <p className="event__past-title" onClick={handleDropdown}>
        <span>Past Events</span>
        {!dropdown ? <DownOutlined /> : <UpOutlined />}
      </p>
      {dropdown && <div className="event__past-history">You have no events in your history.</div>}
    </div>
  );
};

export default EventManage;
