import { useFormContext, useFormState } from 'react-hook-form';

export const SubmitButton = () => {
  const { control } = useFormContext();
  const { isSubmitted, errors } = useFormState({ control });

  const isSubmitDisabled = isSubmitted && Object.keys(errors).length > 0;

  return (
    <div className="form-actions">
      <button
        type="submit"
        className={`submit-btn ${isSubmitDisabled ? 'btn-disabled' : ''}`}
        disabled={isSubmitDisabled}
      >
        Rezervovat
      </button>
    </div>
  );
};
