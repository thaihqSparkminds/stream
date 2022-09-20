import { Switch } from 'antd';
import React, { useRef } from 'react';

interface ChannelCardProps {
  avatar: string;
  miniLogoChannel: React.ReactNode;
  isPublic?: boolean;
  title: string;
  name: string;
  handleSwitch?: () => void;
}

const ChannelCard: React.FunctionComponent<ChannelCardProps> = ({
  avatar,
  miniLogoChannel,
  isPublic,
  title,
  name,
  handleSwitch,
}) => {
  const itemRef = useRef<any>();

  const localHandleSwitch = (checked: boolean, event: Event) => {
    if (handleSwitch) handleSwitch();
    if (!checked) {
      itemRef.current.classList.add('event__item--disable');
    } else itemRef.current.classList.remove('event__item--disable');
  };
  return (
    <div className="event__item" ref={itemRef}>
      <div className="event-item__left-side">
        <div className="event-item__logo-box">
          <img src={avatar} alt="" />
          {miniLogoChannel}
        </div>
        <div className="event-item__info-box">
          <p className="event-item__name">
            {name}
            {isPublic && <span>Public</span>}
          </p>
          <span className="event-item__title">{title}</span>
        </div>
      </div>
      <div className="event-item__right-side">
        <span>Edit</span>
        <Switch defaultChecked onChange={localHandleSwitch} />
      </div>
    </div>
  );
};

export default ChannelCard;
