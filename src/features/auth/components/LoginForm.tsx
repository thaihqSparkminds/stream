import { useAppSelector } from 'app/hooks';
import { InputField, PasswordInputField } from 'components/FormFields';
import { LoginInformation } from 'models';
import { useForm } from 'react-hook-form';
import { selectStates } from '../authSlice';

export interface LoginFormProps {
  initialValue: LoginInformation;
  onSubmit: (formValues: LoginInformation) => void;
}

export default function LoginForm({ initialValue, onSubmit }: LoginFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  const authStates = useAppSelector(selectStates);

  return (
    <>
      <div>
        <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <InputField name="email" control={control} required placeholder="Email" />
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

          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
