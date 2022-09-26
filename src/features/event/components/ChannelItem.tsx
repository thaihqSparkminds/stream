import React from 'react';

interface ChannelItemProps {
  logo: React.ReactNode;
  name: string;
  onClick: () => void;
}

const ChannelItem: React.FunctionComponent<ChannelItemProps> = ({ logo, name, onClick }) => {
  return (
    <div className="event__channel-item" onClick={onClick}>
      <div className="event__channel-logo">{logo}</div>
      <span className="event__channel-name">{name}</span>
    </div>
  );
};

export default ChannelItem;
