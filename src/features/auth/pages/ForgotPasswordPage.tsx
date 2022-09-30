import authApi from 'api/authApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ForgotInformation } from 'models';
import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authActions, selectStates } from '../authSlice';
import ForgotForm from '../components/ForgotForm';

interface ForgotPasswordPageProps {}

const initialValue: ForgotInformation = {
  email: '',
  password: '',
};

const ForgotPasswordPage: React.FunctionComponent<ForgotPasswordPageProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectStates);

  const onSubmit = (value: ForgotInformation) => {
    if (!authState.isSendResetPass) {
      resetPassword(value);
    } else {
      navigate('/');
      dispatch(authActions.setForgotReset());
    }
  };

  useEffect(() => {
    dispatch(authActions.setAlertFail(null));
  }, []);

  const resetPassword = useCallback(async (value: ForgotInformation) => {
    const res = await authApi.resetPassword(value);
    if (res === true) dispatch(authActions.setIsSendResetPass(true));
    else dispatch(authActions.setAlertFail(true));
  }, []);

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
