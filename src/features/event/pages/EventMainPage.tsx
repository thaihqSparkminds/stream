import { CloseOutlined, YoutubeFilled } from '@ant-design/icons';
import eventLogo from 'assets/images/event_logo.png';
import ObsLogo from 'components/Icons/ObsLogo';
import RecordLogo from 'components/Icons/RecordLogo';
import VideoLogo from 'components/Icons/VideoLogo';
import { CreateInformation1 } from 'models/event/createInformation1';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import CreateForm1 from '../components/CreateForm1';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { Button, Switch } from 'antd';
import CreateEvent from '../components/CreateEvent';

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
    setStep(4);
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
        <div className="event__container">
          <img src={eventLogo} alt="" />
          <span className="event__title">Schedule an Event</span>
          <span className="event__subtitle">Let your audience know when you plan to go live.</span>
          <button onClick={handleClick}>+ Schedule Live Event</button>
        </div>
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
                <p>Create event</p>
                <span>Choose your stream title, description, and thumbnail.</span>
              </div>
              <CreateForm1 initialValue={initialValue1} onSubmit={onSubmit1} />
            </div>
          </>
        )}

        {step === 3 && (
          <CreateEvent formResult={formResult} initialValue={formResult} onSubmit={onCreate} />
        )}
      </div>
      <div className="event__bg-cover" onClick={handleClose} ref={bgRef} />
    </>
  );
};

export default EventMainPage;
