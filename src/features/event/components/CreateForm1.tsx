import { DatePickerField, InputField, TimePickerField } from 'components/FormFields';
import { TextAreaField } from 'components/FormFields/TextAreaField';
import { CreateInformation1 } from 'models/event/createInformation1';
import React from 'react';
import { useForm } from 'react-hook-form';

interface CreateForm1Props {
  initialValue: CreateInformation1;
  onSubmit: (formValues: CreateInformation1) => void;
}

const CreateForm1: React.FunctionComponent<CreateForm1Props> = ({
  initialValue,
  onSubmit,
}: CreateForm1Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  return (
    <div>
      <form className="form event-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <span>Title</span>
            <InputField name="title" control={control} placeholder="Title" />
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <span>Description</span>
            <TextAreaField
              name="description"
              control={control}
              placeholder="Add a stream description (optional)"
            />
          </div>
        </div>
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

export default CreateForm1;
