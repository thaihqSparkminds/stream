import { useAppSelector } from 'app/hooks';
import { InputField, PasswordInputField } from 'components/FormFields';
import { ForgotInformation } from 'models';
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
      {authStates.isSendResetPass ? (
        <div className="form__alert">
          <span>✅ Reset password success.</span>
        </div>
      ) : (
        <>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <InputField name="email" control={control} placeholder="Email" />
            </div>
          </div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <PasswordInputField
                required
                name="password"
                control={control}
                placeholder="Password"
                visibilityToggle={false}
              />
            </div>
          </div>
          {authStates.alertFail === true && (
            <div className="form__alert form__alert--red">
              <span>❌ Reset password fail.</span>
            </div>
          )}
        </>
      )}

      <button className="btn btn-primary" type="submit">
        {authStates.isSendResetPass ? 'Back to Restream' : 'Reset Password'}
      </button>
    </form>
  );
};

export default ForgotForm;
