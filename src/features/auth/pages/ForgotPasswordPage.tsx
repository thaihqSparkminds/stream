import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ForgotInformation } from 'models/authentication/forgotInfomation';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authActions, selectStates } from '../authSlice';
import ForgotForm from '../components/ForgotForm';

interface ForgotPasswordPageProps {}

const initialValue = {
  email: '',
};

const ForgotPasswordPage: React.FunctionComponent<ForgotPasswordPageProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectStates);

  const onSubmit = (value: ForgotInformation) => {
    dispatch(authActions.setIsSendResetPass(!authState.isSendResetPass));
    if (!authState.isSendResetPass) {
      dispatch(authActions.setIsSendResetPass(true));
      dispatch(authActions.setForgotEmail(value.email));
    } else {
      navigate('/');
      dispatch(authActions.setForgotReset());
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth__header" onClick={() => navigate('/')}>
          Restream
        </h1>
        <div className="form__container">
          <h1 className="form__title">Password recovery</h1>
          <ForgotForm initialValue={initialValue} onSubmit={onSubmit} />
          {!authState.isSendResetPass && (
            <div className="form__nav-links">
              <p className="form__nav-link">
                Changed your mind? <Link to={'/login'}>Log In</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
