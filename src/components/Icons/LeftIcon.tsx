import * as React from 'react';

interface LeftIconProps {}

const LeftIcon: React.FunctionComponent<LeftIconProps> = (props) => {
  return (
    <span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.75 18.25L15.25 11.75L8.75 5.25" stroke="#B3BAC5" strokeWidth="2"></path>
      </svg>
    </span>
  );
};

export default LeftIcon;
