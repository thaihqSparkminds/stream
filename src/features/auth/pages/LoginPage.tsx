import { Divider } from 'antd';
import { useAppDispatch } from 'app/hooks';
import facebookIcon from 'assets/images/facebook_icon.png';
import googleIcon from 'assets/images/google_icon.png';
import download from 'assets/images/login_download.png';
import event from 'assets/images/login_event.png';
import live from 'assets/images/login_live.png';
import LoginLogo from 'components/Icons/LoginLogo';
import { SignupInformation } from 'models/authentication/signupInformation';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../authSlice';
import LoginForm from '../components/LoginForm';

interface LoginPageProps {}

const initialValue = {
  email: '',
  password: '',
};

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (value: SignupInformation) => {
    console.log(value);
    dispatch(authActions.setIsLoggedIn(true));
    navigate('/my/event');
  };
  return (
    <>
      <div className="login-page" style={{ backgroundColor: 'white' }}>
        <div className="login__left-side">
          <div className="form__container">
            <div className="login__logo-container" onClick={() => navigate('/')}>
              <LoginLogo />
            </div>
            <h1 className="form__title">Welcome back</h1>
            <div className="form__social-options">
              <button className="form__social-option">
                <img src={googleIcon} alt="" />
                <span>Continue with Google</span>
              </button>
              <button className="form__social-option">
                <img src={facebookIcon} alt="" />
                <span>Continue with Facebook</span>
              </button>
            </div>
            <Divider className="form__divider">OR</Divider>
            <LoginForm initialValue={initialValue} onSubmit={onSubmit} />
            <div className="form__nav-links">
              <p className="form__nav-link">
                New to Restream? <Link to={'/register'}>Sign Up</Link>
              </p>
              <span className="form__nav-link">
                <Link to={'/reset-password'}>Forgot password?</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="login__right-side">
          <div className="login__banner-header">
            Over 5,000,000 streamers worldwide choose Restream
          </div>
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
      </div>
    </>
  );
};

export default LoginPage;
