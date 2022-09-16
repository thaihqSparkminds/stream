import React from 'react';
import eventLogo from 'assets/images/event_logo.png';
import { useNavigate } from 'react-router-dom';
import { hasLoadedNamespace } from 'i18next';
import LeftIcon from 'components/Icons/LeftIcon';
import Card from '../components/Card';
import RecordLogo from 'components/Icons/RecordLogo';
import ObsLogo from 'components/Icons/ObsLogo';
import VideoLogo from 'components/Icons/VideoLogo';

interface EventMainPageProps {}

const EventMainPage: React.FunctionComponent<EventMainPageProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {};
  return (
    <>
      <div className="event-page">
        <div className="event__container">
          <img src={eventLogo} alt="" />
          <span className="event__title">Schedule an Event</span>
          <span className="event__subtitle">Let your audience know when you plan to go live.</span>
          <button onClick={handleClick}>+ Schedule Live Event</button>
        </div>

        <div className="event__select-container">
          <span className="event__select-header">How do you want to stream?</span>
          <div className="event__select-list">
            <Card
              image={<RecordLogo />}
              title={'Restream Studio'}
              desc={'Stream directly from your browser'}
            />
            <Card
              image={<ObsLogo />}
              title={'Encoder | RTMP'}
              desc={'Go live from OBS, Zoom, vMix, etc.'}
            />
            <Card
              image={<VideoLogo />}
              title={'Video File'}
              desc={'Schedule your video or stream recording'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventMainPage;
