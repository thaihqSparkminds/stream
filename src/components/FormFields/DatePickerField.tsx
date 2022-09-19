import { DatePicker } from 'antd';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface DatePickerFieldProps {
  name: string;
  control: Control<any>;
  handleOnChange?: any;
  formGroupClassName?: string;
  errorClassName?: string;
  size: 'large' | 'middle' | 'small';
  defaultValue?: any;
}

export const DatePickerField: React.FunctionComponent<DatePickerFieldProps> = ({
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
      <DatePicker
        size={size}
        value={value}
        onChange={(value: any, dateString: string) => {
          if (handleOnChange) {
            handleOnChange(value, dateString);
          }
          onChange(value, dateString);
        }}
        onBlur={onBlur}
        defaultValue={defaultValue}
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
