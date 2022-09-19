import LeftIcon from 'components/Icons/LeftIcon';
import React from 'react';

interface CardProps {
  image: React.ReactNode;
  title: string;
  desc: string;
  onClick: React.MouseEventHandler;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <div className="event__select-card" onClick={props.onClick}>
      <div className="event__card-box">
        {props.image}
        <div className="event__card-content">
          <span className="event-card__content-title">{props.title}</span>
          <span className="event-card__content-desc">{props.desc}</span>
        </div>
      </div>
      <LeftIcon />
    </div>
  );
};

export default Card;
