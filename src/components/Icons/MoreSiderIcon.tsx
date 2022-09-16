import React from 'react';

interface MoreSiderIconProps {}

const MoreSiderIcon: React.FunctionComponent<MoreSiderIconProps> = (props) => {
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
          d="M6 10C4.9 10 4 10.9 4 12 4 13.1 4.9 14 6 14 7.1 14 8 13.1 8 12 8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12 16 13.1 16.9 14 18 14 19.1 14 20 13.1 20 12 20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10 13.1 10 14 10.9 14 12 14 13.1 13.1 14 12 14 10.9 14 10 13.1 10 12Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export default MoreSiderIcon;
