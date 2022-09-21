import { YoutubeFilled } from '@ant-design/icons';
import { Button } from 'antd';
import DeleteIcon from 'components/Icons/DeleteIcon';
import EditIcon from 'components/Icons/EditIcon';
import EmbedIcon from 'components/Icons/EmbedIcon';
import React from 'react';
import scheduleLogo from 'assets/images/event_schedule_logo.png';
import { CreateInformation1 } from 'models/event/createInformation1';
import moment from 'moment';

interface ScheduleCardProps {
  avatar: string;
  formResult: CreateInformation1;
  handleEmbed: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  handleRtmp: () => void;
  live?: boolean;
}

const ScheduleCard: React.FunctionComponent<ScheduleCardProps> = ({
  avatar,
  formResult,
  handleEmbed,
  handleEdit,
  handleDelete,
  handleRtmp,
  live,
}) => {
  return (
    <div className="event__schedule-card">
      <div className="event-card__left-side">
        <div className="event-card__logo-box">
          <img src={scheduleLogo} alt="" />
          {live && <div className="event__live">LIVE</div>}
        </div>
        <div className="event-card__info">
          <span className="event-card__title">{formResult.title}</span>
          <span className="event-card__datetime">{moment(formResult.date).format('LLLL')}</span>
          <div className="event-card__img-container">
            <div className="event-card__img">
              <img src={avatar} alt="" />
              <YoutubeFilled />
            </div>
          </div>
        </div>
      </div>
      <div className="event-card__right-side">
        <div className="event-card__action-container">
          <button className="event-card__action" onClick={handleEmbed}>
            <EmbedIcon />
          </button>
          <button className="event-card__action" onClick={handleEdit}>
            <EditIcon />
          </button>
          {!live ? (
            <button className="event-card__action" onClick={handleDelete}>
              <DeleteIcon />
            </button>
          ) : (
            <button className="event-card__action event-card__action--stop">Stop Event</button>
          )}
        </div>
        <div className="event-card__other-option-box">
          <Button type="primary" size="large" onClick={handleRtmp}>
            RTMP Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
