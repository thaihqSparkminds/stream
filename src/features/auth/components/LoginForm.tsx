import { InputField, PasswordInputField } from 'components/FormFields';
import { LoginInformation } from 'models';
import { useForm } from 'react-hook-form';

export interface LoginFormProps {
  initialValue: LoginInformation;
  onSubmit: (formValues: LoginInformation) => void;
}

export default function LoginForm({ initialValue, onSubmit }: LoginFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });

  return (
    <>
      <div>
        <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <InputField name="email" control={control} placeholder="Email" />
            </div>
          </div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <PasswordInputField
                name="password"
                control={control}
                placeholder="Password"
                visibilityToggle={false}
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
