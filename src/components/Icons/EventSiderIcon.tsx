import * as React from 'react';

interface EventSiderIconProps {}

const EventSiderIcon: React.FunctionComponent<EventSiderIconProps> = (props) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 6.4C22 5.2 21 4.2 19.8 4.2H18.7V2H16.4V4.2H7.6V2H5.3V4.2H4.2C3 4.2 2 5.2 2 6.4V19.8C2 21 3 22 4.2 22H19.8C21 22 22 21 22 19.8V6.4ZM10.6 11.7L11.5 9C11.7 8.6 12.3 8.6 12.5 9L13.4 11.7 16.2 11.7C16.7 11.7 16.9 12.3 16.5 12.6L14.2 14.2 15.1 16.9C15.2 17.4 14.7 17.7 14.3 17.5L12 15.8 9.7 17.5C9.3 17.7 8.8 17.4 9 16.9L9.8 14.2 7.5 12.6C7.2 12.3 7.4 11.7 7.8 11.7L10.6 11.7Z"
          fill="#fff"
        />
      </svg>
    </span>
  );
};

export default EventSiderIcon;
