import { Divider } from 'antd';
import authApi from 'api/authApi';
import { useAppDispatch } from 'app/hooks';
import facebookIcon from 'assets/images/facebook_icon.png';
import googleIcon from 'assets/images/google_icon.png';
import { SignupInformation } from 'models';
import React, { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../authSlice';
import RegisterForm from '../components/RegisterForm';

interface RegisterPageProps {}

const initialValue = {
  email: '',
  password: '',
};

const RegisterPage: React.FunctionComponent<RegisterPageProps> = (props) => {
  const navigate = useNavigate();

  const onSubmit = (value: SignupInformation) => {
    signup(value);
  };

  const signup = useCallback(
    async (value: SignupInformation) => {
      const body = await authApi.signup(value);
      if (body) {
        navigate('/login');
      }
    },
    [navigate]
  );

  return (
    <>
      <div className="auth-page">
        <div className="auth-container">
          <h1 className="auth__header" onClick={() => navigate('/')}>
            Restream
          </h1>
          <div className="form__container">
            <h1 className="form__title">Create your account</h1>
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
            <RegisterForm initialValue={initialValue} onSubmit={onSubmit} />
            <div className="form__nav-links">
              <p className="form__nav-link">
                Already have an account? <Link to={'/login'}>Log In</Link>
              </p>
            </div>
          </div>
          <div className="auth__confirm-text">
            By signing up, you agree to the Terms of Service. You also agree to receive emails from
            Restream.
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
