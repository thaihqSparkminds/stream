import { Divider } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import googleIcon from 'assets/images/google_icon.png';
import facebookIcon from 'assets/images/facebook_icon.png';

interface RegisterPageProps {}

const initialValue = {
  email: '',
  password: '',
};

const RegisterPage: React.FunctionComponent<RegisterPageProps> = (props) => {
  const { t } = useTranslation();
  const onSubmit = () => {};
  const navigate = useNavigate();
  return (
    <>
      <div className="signup-page">
        <div className="signup-container">
          <h1 className="signup__header" onClick={() => navigate('/')}>
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
          <div className="signup__confirm-text">
            By signing up, you agree to the Terms of Service. You also agree to receive emails from
            Restream.
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
