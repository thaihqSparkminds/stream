import React from 'react';

interface HomeSiderIconProps {}

const HomeSiderIcon: React.FunctionComponent<HomeSiderIconProps> = (props) => {
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
          d="M2 8.9C2 8.6 2 8.4 2 8.3 2.1 8.1 2.2 8 2.2 7.9 2.4 7.8 2.5 7.7 2.8 7.5L12 2 21.2 7.5C21.5 7.7 21.6 7.8 21.8 7.9 21.8 8 21.9 8.1 22 8.3 22 8.4 22 8.6 22 8.9V17.2C22 18.9 22 19.7 21.7 20.4 21.4 20.9 20.9 21.4 20.4 21.7 19.7 22 18.9 22 17.2 22L14 22V14H10V22H6.8C5.1 22 4.3 22 3.6 21.7 3.1 21.4 2.6 20.9 2.3 20.4 2 19.7 2 18.9 2 17.2V8.9Z"
          fill="#EBECF0"
        />
      </svg>
    </span>
  );
};

export default HomeSiderIcon;
