import { useAppSelector } from 'app/hooks';
import { InputField } from 'components/FormFields';
import { ForgotInformation } from 'models/authentication/forgotInfomation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { selectStates } from '../authSlice';

interface ForgotFormProps {
  initialValue: ForgotInformation;
  onSubmit: (formValues: ForgotInformation) => void;
}

const ForgotForm: React.FunctionComponent<ForgotFormProps> = ({
  initialValue,
  onSubmit,
}: ForgotFormProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });

  const authStates = useAppSelector(selectStates);

  return (
    <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__form-group">
        {authStates.isSendResetPass ? (
          <div className="form__alert">
            <span>
              ✅ We've just sent password reset link to <b>{authStates.forgotEmail}</b>. Please
              check your inbox and spam folders.
            </span>
          </div>
        ) : (
          <div className="form__form-group-field">
            <InputField name="email" control={control} placeholder="Email" />
          </div>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        {authStates.isSendResetPass ? 'Back to Restream' : 'Reset Password'}
      </button>
    </form>
  );
};

export default ForgotForm;
