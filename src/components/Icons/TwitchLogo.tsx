import React from 'react';

interface ITwitchLogoProps {}

const TwitchLogo: React.FunctionComponent<ITwitchLogoProps> = (props) => {
  return (
    <span>
      <svg width="96" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M94.316 22.69h-6.74v-8.403H85.89v8.404h-6.74V1.685h6.74v5.88h5.055l3.37 3.36v11.766zm-16.842-8.403h-6.74v1.685h6.74v6.723H67.368l-3.37-3.361v-8.408l3.37-3.362h10.106v6.723zm-15.158 0h-5.898v1.685h5.898v6.723h-9.263l-3.37-3.361V1.684h6.74v5.88h5.898l-.005 6.722zM48 5.883h-6.74V1.685H48v4.198zm0 16.808h-6.74V7.564H48v15.127zm-8.425 0H19.37l-3.37-3.362V7.564h6.74v8.404h1.685V7.564h6.74v8.404h1.685V7.564h6.74l-.014 15.127zm-25.259-8.404h-5.89v1.685h5.897v6.723H5.055l-3.37-3.361V1.684h6.74v5.88h5.898l-.007 6.722zM91.79 5.883h-4.213V0h-9.243l-4.252 5.883h-7.555l-2.528 2.521v-2.52h-5.898V0H39.58v5.883H13.516L9.268 0H0v20.17l11.79 11.762h11.789V28.57l3.37 3.362h22.736V28.57l3.37 3.362H64V28.57l3.37 3.362h21.053l7.583-7.564V10.085L91.79 5.883z"
            fill="#9145FF"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h96v31.935H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default TwitchLogo;
