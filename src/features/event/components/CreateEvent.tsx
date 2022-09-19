import { YoutubeFilled } from '@ant-design/icons';
import { Button, Divider, Switch } from 'antd';
import { useForm } from 'react-hook-form';
import ytbAvatar from 'assets/images/youtube_avatar.png';
import { DatePickerField, TimePickerField } from 'components/FormFields';
import { CreateInformation1 } from 'models/event/createInformation1';
import React from 'react';
interface CreateEventProps {
  formResult: CreateInformation1;
  initialValue: CreateInformation1;
  onSubmit: (formValues: CreateInformation1) => void;
}

const CreateEvent: React.FunctionComponent<CreateEventProps> = ({
  formResult,
  initialValue,
  onSubmit,
}: CreateEventProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  return (
    <div className="event__create-container">
      <div className="event__create-header-box">
        <p>Create event</p>
        <span>Choose destinations and customize stream details.</span>
      </div>
      <div className="event__list-header-box">
        <span className="event__active-count">1 of 2 active</span>
        <div className="event__toggle-options">
          <span>Toggle all</span>
          <div className="event__toggle-btn-box">
            <button>OFF</button>
            <Divider className="divider" type="vertical" />
            <button>ON</button>
          </div>
        </div>
      </div>
      <div className="event__list-items">
        <div className="event__item">
          <div className="event-item__left-side">
            <div className="event-item__logo-box">
              <img src={ytbAvatar} alt="" />
              <YoutubeFilled />
            </div>
            <div className="event-item__info-box">
              <p className="event-item__name">
                Thai Ho <span>public</span>
              </p>
              <span className="event-item__title">{formResult.title}</span>
            </div>
          </div>
          <div className="event-item__right-side">
            <span>Edit</span>
            <Switch defaultChecked onChange={() => {}} />
          </div>
        </div>
      </div>
      <Button type="primary">+ Add Channels</Button>
      <form className="form event-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <span>Date</span>
            <DatePickerField size="large" name="date" control={control} />
          </div>
          <div className="form__form-group-field">
            <span>Time</span>
            <TimePickerField size="large" name="date" control={control} />
          </div>
        </div>
        <div className="form__btn-container">
          <button className="btn btn-primary" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
