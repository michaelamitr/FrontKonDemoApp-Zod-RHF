import { useFormContext, type FieldError } from 'react-hook-form';

type ErrorMessageProps = {
  name: string;
};

export const ErrorMessage = ({ name }: ErrorMessageProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name] as FieldError | undefined;

  return (
    fieldError && <small className="error-text">{fieldError.message}</small>
  );
};
