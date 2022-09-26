import React from 'react';

interface ChannelItemProps {
  logo: React.ReactNode;
  name: string;
}

const ChannelItem: React.FunctionComponent<ChannelItemProps> = ({ logo, name }) => {
  return (
    <div className="event__channel-item">
      <div className="event__channel-logo">{logo}</div>
      <span className="event__channel-name">{name}</span>
    </div>
  );
};

export default ChannelItem;
