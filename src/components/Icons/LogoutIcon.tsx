import React from 'react';

interface LogoutIconProps {}

const LogoutIcon: React.FunctionComponent<LogoutIconProps> = (props) => {
  return (
    <span>
      <svg
        width="16px"
        height="20px"
        viewBox="0 0 16 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="02a-rs-dshbrd-menu-open"
            transform="translate(-22.000000, -538.000000)"
            fillRule="nonzero"
          >
            <g id="sidebar-menu">
              <g id="—-logout" transform="translate(12.000000, 530.000000)">
                <g id="Group-28">
                  <g id="baseline-card_travel-24px" transform="translate(8.000000, 8.000000)">
                    <g id="Group-30" transform="translate(2.000000, 1.000000)">
                      <path
                        className="fill-active-svg"
                        d="M9,1 L9,-1 L13,-1 C14.6568542,-1 16,0.343145751 16,2 L16,16 C16,17.6568542 14.6568542,19 13,19 L9,19 L9,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,2 C14,1.44771525 13.5522847,1 13,1 L9,1 Z"
                        id="Path-8"
                        fill="#fff"
                      ></path>
                      <polygon
                        className="fill-active-svg"
                        id="Path-9"
                        fill="#fff"
                        points="0 10 0 8 8.83333333 8 8.83333333 10"
                      ></polygon>
                      <polygon
                        className="fill-active-svg"
                        id="Path-10"
                        fill="#fff"
                        points="7.41911977 9 4.29289322 5.87377345 5.70710678 4.45955989 10.2475469 9 5.70710678 13.5404401 4.29289322 12.1262266"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};

export default LogoutIcon;
