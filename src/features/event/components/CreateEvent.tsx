import { CloseOutlined, LeftOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import userApi from 'api/userApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import twitchLogo from 'assets/images/twitch_logo.png';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { DatePickerField, TimePickerField } from 'components/FormFields';
import { authActions, selectStates } from 'features/auth/authSlice';
import { CreateInformation1 } from 'models/event/createInformation1';
import { UserPlatform } from 'models/user/userPlatform';
import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { eventActions, selectEventStates } from '../eventSlice';
import ChannelCard from './ChannelCard';
interface CreateEventProps {
  formResult: CreateInformation1;
  initialValue: CreateInformation1;
  onSubmit: (formValues: CreateInformation1) => void;
  handleBack: () => void;
  handleClose: () => void;
  handleAddChannel: () => void;
  isBack?: boolean;
  title?: string;
  btnText?: string;
}

const CreateEvent: React.FunctionComponent<CreateEventProps> = ({
  formResult,
  initialValue,
  onSubmit,
  handleBack,
  handleClose,
  handleAddChannel,
  isBack,
  title,
  btnText,
}: CreateEventProps) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  const userDetail = useAppSelector(selectStates).userDetail;
  const userPlatform = useAppSelector(selectEventStates).userPlatform;

  const getPlatfomUser = useCallback(async (userId: number) => {
    const body = await userApi.getPlatfomUser(userId);
    if (body) {
      console.log(body);
      dispatch(eventActions.setUserPlatform(body));
    }
  }, []);

  useEffect(() => {
    if (userDetail) {
      getPlatfomUser(userDetail.userId);
    }
  }, [userDetail, getPlatfomUser]);

  return (
    <>
      <div className="event__create-container">
        <div className="event__create-header-box">
          <p>
            {isBack && <LeftOutlined onClick={handleBack} className="event__back-btn" />}
            {title ? title : 'Create event'}
            <CloseOutlined onClick={handleClose} className="event__close-btn" />
          </p>
          <span>Choose destinations and customize stream details.</span>
        </div>
        <div className="event__list-header-box">
          <span className="event__active-count">
            0 of {!userPlatform ? 0 : userPlatform.length} active
          </span>
          <div className="event__toggle-options">
            <span>Toggle all</span>
            <div className="event__toggle-btn-box">
              <button onClick={() => dispatch(eventActions.setActiveAll(false))}>OFF</button>
              <Divider className="divider" type="vertical" />
              <button onClick={() => dispatch(eventActions.setActiveAll(true))}>ON</button>
            </div>
          </div>
        </div>
        <div className="event__list-items">
          {userPlatform &&
            userPlatform.map((e: UserPlatform) => (
              <ChannelCard
                avatar={e.image}
                miniLogoChannel={
                  e.platformType === 'YOUTUBE' ? (
                    <YoutubeFilled />
                  ) : (
                    <div>
                      <img src={twitchLogo} alt="" />
                    </div>
                  )
                }
                title={formResult.title}
                name={e.title}
              />
            ))}
        </div>
        <Button className="event__create-btn" type="primary" onClick={handleAddChannel}>
          + Add Channels
        </Button>
        <form className="form event-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <span>Date</span>
              <DatePickerField size="large" name="date" control={control} />
            </div>
            <div className="form__form-group-field">
              <span>Asia/Bangkok</span>
              <TimePickerField size="large" name="date" control={control} />
            </div>
          </div>
          <div className="form__btn-container">
            <button className="btn btn-primary" type="submit">
              {btnText ? btnText : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
