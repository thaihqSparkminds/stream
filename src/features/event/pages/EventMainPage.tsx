import { CloseOutlined, LeftOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import eventLogo from 'assets/images/event_logo.png';
import scheduleLogo from 'assets/images/event_schedule_logo.png';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import DeleteIcon from 'components/Icons/DeleteIcon';
import EditIcon from 'components/Icons/EditIcon';
import EmbedIcon from 'components/Icons/EmbedIcon';
import ObsLogo from 'components/Icons/ObsLogo';
import RecordLogo from 'components/Icons/RecordLogo';
import VideoLogo from 'components/Icons/VideoLogo';
import { CreateInformation1 } from 'models/event/createInformation1';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddChannel from '../components/AddChannel';
import Card from '../components/Card';
import CreateEvent from '../components/CreateEvent';
import CreateForm1 from '../components/CreateForm1';

interface EventMainPageProps {}

const initialValue1 = {
  title: '',
  description: '',
  date: '',
};

const EventMainPage: React.FunctionComponent<EventMainPageProps> = (props) => {
  const navigate = useNavigate();
  const bgRef = useRef<any>();
  const selectBoxRef = useRef<any>();
  const [step, setStep] = useState(0);
  const [formResult, setFormResult] = useState(initialValue1);

  const handleClose = () => {
    bgRef.current.style.display = 'none';
    setStep(0);
  };
  const handleClick = () => {
    bgRef.current.style.display = 'block';
    setStep(1);
  };
  const handleSelectType = (index: number) => {
    setStep(2);
  };

  const onSubmit1 = (value: CreateInformation1) => {
    console.log(value);
    setFormResult(value);
    setStep(3);
  };

  const onCreate = (value: CreateInformation1) => {
    setStep(5);
    bgRef.current.style.display = 'none';
  };
  const handleAddChannel = () => {
    setStep(4);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    switch (step) {
      case 1:
        console.log(1);
        break;
      case 2:
        console.log(2);
        break;
      case 3:
        console.log(3);
        break;

      default:
        break;
    }
  }, [step]);

  return (
    <>
      <div className="event-page">
        {step === 0 && (
          <div className="event__container">
            <img src={eventLogo} alt="" />
            <span className="event__title">Schedule an Event</span>
            <span className="event__subtitle">
              Let your audience know when you plan to go live.
            </span>
            <button onClick={handleClick}>+ Schedule Live Event</button>
          </div>
        )}
        {step === 1 && (
          <>
            <div className="event__select-container" ref={selectBoxRef}>
              <p className="event__select-header">
                How do you want to stream?
                <CloseOutlined className="event__close-btn" onClick={handleClose} />
              </p>
              <div className="event__select-list">
                <Card
                  image={<RecordLogo />}
                  title={'Restream Studio'}
                  desc={'Stream directly from your browser'}
                  onClick={() => handleSelectType(1)}
                />
                <Card
                  image={<ObsLogo />}
                  title={'Encoder | RTMP'}
                  desc={'Go live from OBS, Zoom, vMix, etc.'}
                  onClick={() => handleSelectType(2)}
                />
                <Card
                  image={<VideoLogo />}
                  title={'Video File'}
                  desc={'Schedule your video or stream recording'}
                  onClick={() => handleSelectType(3)}
                />
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="event__create-container">
              <div className="event__create-header-box">
                <p>
                  <LeftOutlined onClick={handleBack} className="event__back-btn" />
                  Create event
                  <CloseOutlined onClick={handleClose} className="event__close-btn" />
                </p>
                <span>Choose your stream title, description, and thumbnail.</span>
              </div>
              <CreateForm1 initialValue={initialValue1} onSubmit={onSubmit1} />
            </div>
          </>
        )}

        {step === 3 && (
          <CreateEvent
            formResult={formResult}
            handleClose={handleClose}
            initialValue={formResult}
            onSubmit={onCreate}
            handleBack={handleBack}
            handleAddChannel={handleAddChannel}
          />
        )}

        {step === 4 && <AddChannel handleClose={handleClose} handleBack={handleBack} />}
        {step === 5 && (
          <div className="event__main">
            <div className="event__header">
              <span className="event__title">Events</span>
              <Button
                onClick={handleClick}
                className="event__create-btn"
                type="primary"
                size="large"
              >
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
                  <span className="event-card__datetime">
                    {moment(formResult.date).format('LLLL')}
                  </span>
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
                  <button className="event-card__action">
                    <EmbedIcon />
                  </button>
                  <button className="event-card__action">
                    <EditIcon />
                  </button>
                  <button className="event-card__action">
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
                  >
                    RTMP Settings
                  </Dropdown.Button>
                </div>
              </div>
            </div>
            <p className="event__past-title">Past Events</p>
            <div className="event__past-history">You have no events in your history.</div>
          </div>
        )}
      </div>
      <div className="event__bg-cover" onClick={handleClose} ref={bgRef} />
    </>
  );
};

export default EventMainPage;
