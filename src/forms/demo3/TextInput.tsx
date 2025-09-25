import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

interface Props {
  name: string;
  type?: 'text' | 'email' | 'password';
  label: string;
  placeholder?: string;
}

export const TextInput = ({
  name,
  type = 'text',
  label,
  placeholder,
}: Props) => {
  const { register } = useFormContext();

  return (
    <label className="form-label">
      <span>{label}</span>
      <input
        {...register(name)}
        type={type}
        className="form-input"
        placeholder={placeholder}
      />
      <ErrorMessage name={name} />
    </label>
  );
};
