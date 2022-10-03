import { Divider } from 'antd';
import authApi from 'api/authApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import facebookIcon from 'assets/images/facebook_icon.png';
import googleIcon from 'assets/images/google_icon.png';
import LoginLogo from 'components/Icons/LoginLogo';
import { LoginInformation } from 'models';
import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authActions, selectIsLoggedIn } from '../authSlice';
import LoginBanner from '../components/LoginBanner';
import LoginForm from '../components/LoginForm';

interface LoginPageProps {}

const initialValue = {
  email: '',
  password: '',
};

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedInState = useAppSelector(selectIsLoggedIn);

  const onSubmit = (value: LoginInformation) => {
    login(value);
  };

  useEffect(() => {
    if (isLoggedInState) navigate('/my/event');
  }, [isLoggedInState, navigate]);

  const login = useCallback(
    async (value: LoginInformation) => {
      const body = await authApi.login(value);

      if (body) {
        localStorage.setItem('sessionId', body.sessionId);
        localStorage.setItem('token', body.token);
        dispatch(authActions.setIsLoggedIn(true));
      }
    },
    [dispatch]
  );

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
        <LoginBanner />
      </div>
    </>
  );
};

export default LoginPage;
