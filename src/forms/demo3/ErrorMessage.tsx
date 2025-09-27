import { useFormContext, useFormState, type FieldError } from 'react-hook-form';

type ErrorMessageProps = {
  name: string;
};

export const ErrorMessage = ({ name }: ErrorMessageProps) => {
  const { control } = useFormContext();
  const { errors } = useFormState({ control, name: [name] });

  const fieldError = errors[name] as FieldError | undefined;

  return (
    fieldError && <small className="error-text">{fieldError.message}</small>
  );
};
