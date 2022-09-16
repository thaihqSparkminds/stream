import React from 'react';

interface RecordLogoProps {}

const RecordLogo: React.FunctionComponent<RecordLogoProps> = (props) => {
  return (
    <span>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="28" fill="#F4F5F7"></rect>
        <path
          d="M32 18.668C33.4727 18.668 34.6666 19.8619 34.6666 21.3346V25.3346L41.3333 19.3346V36.668L34.6666 30.668V34.668C34.6666 36.1407 33.4727 37.3346 32 37.3346H17.3333C15.8605 37.3346 14.6666 36.1407 14.6666 34.668V21.3346C14.6666 19.8619 15.8605 18.668 17.3333 18.668H32Z"
          fill="#286FFF"
        ></path>
      </svg>
    </span>
  );
};

export default RecordLogo;
