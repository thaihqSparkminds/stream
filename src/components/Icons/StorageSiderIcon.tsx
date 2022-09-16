import React from 'react';

interface StorageSiderIconProps {}

const StorageSiderIcon: React.FunctionComponent<StorageSiderIconProps> = (props) => {
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
          d="M19.4 10C18.7 6.6 15.6 4 12 4 9.1 4 6.6 5.6 5.4 8 2.3 8.4 0 10.9 0 14 0 17.3 2.7 20 6 20H19C21.8 20 24 17.8 24 15 24 12.4 22 10.2 19.4 10Z"
          fill="#fff"
        />
      </svg>
    </span>
  );
};

export default StorageSiderIcon;
