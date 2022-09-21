import { Switch } from 'antd';
import { useAppSelector } from 'app/hooks';
import React, { useRef, useState, useEffect } from 'react';
import { selectActiveAll } from '../eventSlice';

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
  const ActiveAllState = useAppSelector(selectActiveAll);
  const [ischecked, setIsChecked] = useState(false);
  const localHandleSwitch = (checked: boolean, event: Event) => {
    if (handleSwitch) handleSwitch();
    if (!checked) {
      itemRef.current.classList.add('event__item--disable');
    } else itemRef.current.classList.remove('event__item--disable');
    setIsChecked(!ischecked);
  };

  useEffect(() => {
    if (ActiveAllState) {
      setIsChecked(true);
      itemRef.current.classList.remove('event__item--disable');
    } else {
      setIsChecked(false);
      itemRef.current.classList.add('event__item--disable');
    }
  }, [ActiveAllState]);

  return (
    <div className="event__item event__item--disable" ref={itemRef}>
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
        <Switch checked={ischecked} onClick={localHandleSwitch} />
      </div>
    </div>
  );
};

export default ChannelCard;
