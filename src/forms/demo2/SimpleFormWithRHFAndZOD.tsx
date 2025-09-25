import '../../App.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingFormSchema, type bookingFormValues } from './schema';
import { useEffect } from 'react';

let renderCount = 0;

export const SimpleFormWithRHFAndZOD = () => {
  renderCount++;

  const defaultValues: bookingFormValues = {
    fullName: '',
    email: '',
    phone: '',
    roomType: 'single',
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {
      errors: { fullName, email, phone, roomType },
      isSubmitSuccessful,
    },
  } = useForm<bookingFormValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(bookingFormSchema),
    // mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<bookingFormValues> = (data) => {
    console.log('Submitting reservation:', data);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [isSubmitSuccessful]); // vymaže formulář po odeslání

  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Rezervace hotelového pokoje</h2>
        <h3>Render count: {renderCount}</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-grid">
            {/* CELÉ JMÉNO */}
            <label className="form-label">
              <span>Celé jméno</span>
              <input
                {...register('fullName')}
                className="form-input"
                placeholder="Jan Novák"
              />
              {fullName?.message && (
                <small className="error-text">{fullName?.message}</small>
              )}
            </label>
            {/*E-MAIL */}
            <label className="form-label">
              <span>E-mail</span>
              <input
                {...register('email')}
                type="email"
                autoComplete="email"
                className="form-input"
                placeholder="email@example.com"
              />
              {email?.message && (
                <small className="error-text">{email?.message}</small>
              )}
            </label>
            {/* TELEFON */}
            <label className="form-label">
              <span>Telefon</span>
              <input
                {...register('phone')}
                className="form-input"
                placeholder="+420 123 456 789"
              />
              {phone?.message && (
                <small className="error-text">{phone?.message}</small>
              )}
            </label>
            {/* TYP POKOJE */}
            <div className="form-row">
              <label className="form-label">
                <span>Typ pokoje</span>
                <select {...register('roomType')} className="form-input">
                  <option value="single">Single (1 lůžko)</option>
                  <option value="double">Double (2 lůžka)</option>
                  <option value="suite">Suite</option>
                </select>
                {roomType?.message && (
                  <small className="error-text">{roomType?.message}</small>
                )}
              </label>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="form-actions">
              <button
                type="submit"
                className="submit-btn"
                // className={`submit-btn ${!isValid ? 'btn-disabled' : ''}`}
                // disabled={!isValid}
              >
                Rezervovat
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
};
