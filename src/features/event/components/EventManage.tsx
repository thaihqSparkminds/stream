import { DownOutlined, UpOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import DeleteIcon from 'components/Icons/DeleteIcon';
import EditIcon from 'components/Icons/EditIcon';
import EmbedIcon from 'components/Icons/EmbedIcon';
import moment from 'moment';
import React, { useState } from 'react';
import scheduleLogo from 'assets/images/event_schedule_logo.png';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { CreateInformation1 } from 'models/event/createInformation1';
import ScheduleCard from './ScheduleCard';

interface EventManageProps {
  handleCreate: () => void;
  formResult: CreateInformation1;
  handleRtmp: () => void;
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
        formResult={formResult}
        handleEmbed={handleEmbed}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleRtmp={handleRtmp}
        live
      />

      <ScheduleCard
        avatar={ytbAvatar}
        formResult={formResult}
        handleEmbed={handleEmbed}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleRtmp={handleRtmp}
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
