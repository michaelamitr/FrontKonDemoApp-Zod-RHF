import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

type Option = {
  value: string;
  label: string;
};

interface Props {
  name: string;
  label: string;
  options: Option[];
}

export const SelectInput = ({ name, label, options }: Props) => {
  const { register } = useFormContext();

  return (
    <label className="form-label">
      <span>{label}</span>
      <select {...register(name)} className="form-input">
        {options.map(({ value, label }) => {
          return (
            <option value={value} key={value}>
              {label}
            </option>
          );
        })}
      </select>
      <ErrorMessage name={name} />
    </label>
  );
};
