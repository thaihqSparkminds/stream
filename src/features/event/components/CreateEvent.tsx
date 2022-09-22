import { CloseOutlined, LeftOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import { useAppDispatch } from 'app/hooks';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { DatePickerField, TimePickerField } from 'components/FormFields';
import { CreateInformation1 } from 'models/event/createInformation1';
import React from 'react';
import { useForm } from 'react-hook-form';
import { eventActions } from '../eventSlice';
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
          <span className="event__active-count">1 of 2 active</span>
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
          <ChannelCard
            avatar={ytbAvatar}
            miniLogoChannel={<YoutubeFilled />}
            isPublic={true}
            title={formResult.title}
            name={'Thai Ho'}
          />
          <ChannelCard
            avatar={ytbAvatar}
            miniLogoChannel={<YoutubeFilled />}
            isPublic={false}
            title={formResult.title}
            name={'Thai Ho'}
          />
          <ChannelCard
            avatar={ytbAvatar}
            miniLogoChannel={<YoutubeFilled />}
            isPublic={true}
            title={formResult.title}
            name={'Thai Ho'}
          />
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
