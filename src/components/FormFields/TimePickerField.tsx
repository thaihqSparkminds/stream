import { DatePicker, TimePicker } from 'antd';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import moment from 'moment';

export interface TimePickerFieldProps {
  name: string;
  control: Control<any>;
  handleOnChange?: any;
  formGroupClassName?: string;
  errorClassName?: string;
  size: 'large' | 'middle' | 'small';
  defaultValue?: any;
}

export const TimePickerField: React.FunctionComponent<TimePickerFieldProps> = ({
  name,
  control,
  handleOnChange,
  formGroupClassName,
  errorClassName,
  size,
  defaultValue,
  ...otherProps
}) => {
  const {
    field: { value, onChange, onBlur },
    formState: { errors },
  } = useController({
    name,
    control,
  });

  return (
    <div
      className={`form__form-group-datetime-wrap ${formGroupClassName ? formGroupClassName : ''}`}
    >
      <TimePicker
        size={size}
        value={value}
        onChange={(value: any, dateString: string) => {
          if (handleOnChange) {
            handleOnChange(value, dateString);
          }
          onChange(value, dateString);
        }}
        defaultValue={defaultValue}
        onBlur={onBlur}
        {...otherProps}
      />
      {errors?.[name] && (
        <span className={`form__form-group-error ${errorClassName ? errorClassName : ''}`}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
