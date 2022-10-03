import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import userApi from 'api/userApi';
import youtubeApi from 'api/youtubeApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import eventLogo from 'assets/images/event_logo.png';
import ObsLogo from 'components/Icons/ObsLogo';
import RecordLogo from 'components/Icons/RecordLogo';
import VideoLogo from 'components/Icons/VideoLogo';
import { CreateInformation1 } from 'models/event/createInformation1';
import { YoutubeCreateStreamResponse } from 'models/event/youtubeCreateStreamResponse';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { authActions, selectStates } from '../../auth/authSlice';
import AddChannel from '../components/AddChannel';
import Card from '../components/Card';
import CreateEvent from '../components/CreateEvent';
import CreateForm1 from '../components/CreateForm1';
import EventManage from '../components/EventManage';
import RtmpSetting from '../components/RtmpSetting';
import { eventActions, selectEventStates, selectStep } from '../eventSlice';

interface EventMainPageProps {}

const initialValue1 = {
  title: '',
  description: '',
  date: '',
};

const EventMainPage: React.FunctionComponent<EventMainPageProps> = (props) => {
  const bgRef = useRef<any>();
  const selectBoxRef = useRef<any>();
  const [step, setStep] = useState(0);
  const [showRtmp, setShowRtmp] = useState<boolean | string>(false);
  const [formResult, setFormResult] = useState(initialValue1);
  const dispatch = useAppDispatch();
  const stepState = useAppSelector(selectStep);
  const userPlatform = useAppSelector(selectEventStates).userPlatform;
  const sessionId = useRef(localStorage.getItem('sessionId'));
  const token = useRef(localStorage.getItem('token'));
  const userDetail = useAppSelector(selectStates).userDetail;
  const [youtubeCreateStream, setYoutubeCreateStream] =
    useState<YoutubeCreateStreamResponse | null>(null);

  const getUserDetail = useCallback(async () => {
    if (sessionId.current && token.current) {
      const body = await userApi.getUserDetail(token.current, sessionId.current);
      if (body) {
        dispatch(authActions.setUserDetail(body));
      }
    }
  }, [dispatch]);

  const getPlatfomUser = useCallback(
    async (userId: number) => {
      const body = await userApi.getPlatfomUser(userId);
      if (body) {
        dispatch(eventActions.setUserPlatform(body));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getUserDetail();
  }, [getUserDetail]);

  useEffect(() => {
    if (userDetail) {
      getPlatfomUser(userDetail.userId);
    }
  }, [userDetail, getPlatfomUser]);

  const handleClose = () => {
    setStep(0);
  };

  const handleClick = () => {
    setStep(1);
  };

  const handleSelectType = (index: number) => {
    setStep(2);
  };

  const onSubmit1 = (value: CreateInformation1) => {
    setFormResult(value);
    setStep(3);
  };

  const onCreate = (value: CreateInformation1) => {
    setStep(0);
  };

  const handleAddChannel = () => {
    setStep(4);
  };

  const handleBack = () => {
    if (stepState !== 0) {
      setStep(stepState);
      dispatch(eventActions.setStep(0));
    } else setStep(step - 1);
  };

  const handleRtmp = (type: string, channelId: string) => {
    bgRef.current.style.display = 'block';
    if (token.current) handleYoutubeCreateStream(userDetail.userId, token.current, channelId);
    setShowRtmp(type);
  };

  const handleYoutubeCreateStream = useCallback(
    async (userId: number, token: string, channelId: string) => {
      const body = await youtubeApi.createLiveStream(userId, token, channelId);
      if (body) {
        setYoutubeCreateStream(body);
      }
    },
    []
  );

  const handleCloseRtmp = () => {
    bgRef.current.style.display = 'none';
    setShowRtmp(false);
  };

  const handleEmbed = () => {};

  const handleEdit = () => {
    setStep(6);
    dispatch(eventActions.setStep(6));
  };

  const handleDelete = () => {};

  const handleSelect = (value: string) => {};

  useEffect(() => {
    switch (step) {
      case 0:
        bgRef.current.style.display = 'none';
        setShowRtmp(false);
        break;
      case 1:
        bgRef.current.style.display = 'block';
        break;
      case 3:
        break;
      case 5:
        bgRef.current.style.display = 'none';
        break;
    }
  }, [step]);

  return (
    <>
      <div className="event-page">
        {!userPlatform ? (
          <div className="event__container">
            <img src={eventLogo} alt="" />
            <span className="event__title">Schedule an Event</span>
            <span className="event__subtitle">
              Let your audience know when you plan to go live.
            </span>
            <button onClick={handleClick}>+ Schedule Live Event</button>
          </div>
        ) : (
          <EventManage
            handleCreate={handleClick}
            formResult={formResult}
            handleRtmp={handleRtmp}
            handleEmbed={handleEmbed}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
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
            isBack
          />
        )}

        {step === 4 && (
          <AddChannel
            handleSelect={handleSelect}
            handleClose={handleClose}
            handleBack={handleBack}
          />
        )}

        {showRtmp && youtubeCreateStream && (
          <RtmpSetting
            handleCloseRtmp={handleCloseRtmp}
            url={
              showRtmp === 'YOUTUBE'
                ? youtubeCreateStream.ingestionAddress
                : 'rtmp://live.stream.io/live'
            }
            streamKey={showRtmp === 'YOUTUBE' ? youtubeCreateStream.streamName : ''}
          />
        )}

        {step === 5 && (
          <CreateEvent
            formResult={formResult}
            handleClose={handleClose}
            initialValue={formResult}
            onSubmit={onCreate}
            handleBack={handleBack}
            handleAddChannel={handleAddChannel}
            title={'Edit event'}
            btnText={'Save'}
          />
        )}
      </div>
      <div className="event__bg-cover" onClick={handleClose} ref={bgRef} />
    </>
  );
};

export default EventMainPage;
