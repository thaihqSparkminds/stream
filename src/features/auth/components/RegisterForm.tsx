import { InputField, PasswordInputField } from 'components/FormFields';
import { SignupInformation } from 'models/authentication/signupInformation';
import { useForm } from 'react-hook-form';

export interface RegisterFormProps {
  initialValue: SignupInformation;
  onSubmit: (formValues: SignupInformation) => void;
}

export default function RegisterForm({ initialValue, onSubmit }: RegisterFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });

  return (
    <>
      <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
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
          Sign Up
        </button>
      </form>
    </>
  );
}
