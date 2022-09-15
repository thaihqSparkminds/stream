import React from 'react';

interface LoginLogoProps {}

const LoginLogo: React.FunctionComponent<LoginLogoProps> = (props) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        fill="none"
        viewBox="0 0 512 512"
      >
        <path
          fill="#000"
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M233.04 384H160V128h100.251c66.954 0 104.191 27.211 104.191 81.275v1.432c0 36.52-19.335 56.93-46.188 67.312L379.48 384h-77.338l-51.915-91.659H233.04V384zm0-200.861v61.583h23.632c24.704 0 36.878-10.383 36.878-31.149v-1.434c0-20.766-12.889-29-36.521-29H233.04z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  );
};

export default LoginLogo;
