import download from 'assets/images/login_download.png';
import event from 'assets/images/login_event.png';
import live from 'assets/images/login_live.png';
import React from 'react';

interface LoginBannerProps {}

const LoginBanner: React.FunctionComponent<LoginBannerProps> = (props) => {
  return (
    <div className="login__right-side">
      <div className="login__banner-header">Over 5,000,000 streamers worldwide choose Restream</div>
      <div className="login__banner-option-container">
        <div className="login__banner-option">
          <div className="login-banner__thumnail">
            <img src={download} alt="" />
          </div>
          <span className="login-banner__title">Recording</span>
          <span className="login-banner__subtitle">
            Download all your live broadcasts for content repurposing.
          </span>
        </div>
        <div className="login__banner-option">
          <div className="login-banner__thumnail">
            <img src={live} alt="" />
          </div>
          <span className="login-banner__title">Live Studio</span>
          <span className="login-banner__subtitle">
            Go live and host a show with up to 10 people in Full HD.
          </span>
        </div>
        <div className="login__banner-option">
          <div className="login-banner__thumnail">
            <img src={event} alt="" />
          </div>
          <span className="login-banner__title">Events</span>
          <span className="login-banner__subtitle">
            Schedule your live events to alert your audience in advance.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
