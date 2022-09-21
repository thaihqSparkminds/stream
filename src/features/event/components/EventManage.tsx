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
      <div className="event__schedule-card">
        <div className="event-card__left-side">
          <div className="event-card__logo-box">
            <img src={scheduleLogo} alt="" />
          </div>
          <div className="event-card__info">
            <span className="event-card__title">{formResult.title}</span>
            <span className="event-card__datetime">{moment(formResult.date).format('LLLL')}</span>
            <div className="event-card__img-container">
              <div className="event-card__img">
                <img src={ytbAvatar} alt="" />
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
            <button className="event-card__action" onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </div>
          <div className="event-card__other-option-box">
            <Dropdown.Button
              overlay={
                <Menu>
                  <Menu.Item>Switch to Studio</Menu.Item>
                </Menu>
              }
              onClick={handleRtmp}
            >
              RTMP Settings
            </Dropdown.Button>
          </div>
        </div>
      </div>

      <div className="event__schedule-card">
        <div className="event-card__left-side">
          <div className="event-card__logo-box">
            <img src={scheduleLogo} alt="" />
          </div>
          <div className="event-card__info">
            <span className="event-card__title">{formResult.title}</span>
            <span className="event-card__datetime">{moment(formResult.date).format('LLLL')}</span>
            <div className="event-card__img-container">
              <div className="event-card__img">
                <img src={ytbAvatar} alt="" />
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
            <button className="event-card__action" onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </div>
          <div className="event-card__other-option-box">
            <Dropdown.Button
              overlay={
                <Menu>
                  <Menu.Item>Switch to Studio</Menu.Item>
                </Menu>
              }
              onClick={handleRtmp}
            >
              RTMP Settings
            </Dropdown.Button>
          </div>
        </div>
      </div>
      <p className="event__past-title" onClick={handleDropdown}>
        <span>Past Events</span>
        {!dropdown ? <DownOutlined /> : <UpOutlined />}
      </p>
      {dropdown && <div className="event__past-history">You have no events in your history.</div>}
    </div>
  );
};

export default EventManage;
