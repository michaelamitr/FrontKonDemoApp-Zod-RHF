import '../../App.css';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { bookingFormSchema, type bookingFormValues } from '../demo2/schema';
import { SelectInput } from './SelectInput';
import { TextInput } from './TextInput';

let renderCount = 0;

export const FancyForm = () => {
  renderCount++;

  const defaultValues: bookingFormValues = {
    fullName: '',
    email: '',
    phone: '',
    roomType: 'single',
  };

  const methods = useForm<bookingFormValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(bookingFormSchema),
    mode: 'onSubmit',
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, isSubmitted, errors },
    control,
  } = methods;

  const onSubmit: SubmitHandler<bookingFormValues> = (data) => {
    console.log('Submitting reservation:', data);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [isSubmitSuccessful]); // vymaže formulář po odeslání

  const isSubmitDisabled = isSubmitted && Object.keys(errors).length > 0;

  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Rezervace hotelového pokoje</h2>
        <h3>Render count: {renderCount}</h3>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-grid">
              {/* CELÉ JMÉNO */}
              <TextInput
                name="fullName"
                label="Celé jméno"
                placeholder="Jan Novák"
              />
              {/*E-MAIL */}
              <TextInput
                name="email"
                type="email"
                label="E-mail"
                placeholder="email@example.com"
              />
              {/* TELEFON */}
              <TextInput
                name="phone"
                label="Telefon"
                placeholder="+420 123 456 789"
              />
              {/* TYP POKOJE */}
              <div className="form-row">
                <SelectInput
                  name="roomType"
                  label="Typ pokoje"
                  options={[
                    { value: 'single', label: 'Single (1 lůžko)' },
                    { value: 'double', label: 'Double (2 lůžka)' },
                    { value: 'suite', label: 'Suite' },
                  ]}
                />
              </div>
              {/* SUBMIT BUTTON */}
              <div className="form-actions">
                <button
                  type="submit"
                  className={`submit-btn ${
                    isSubmitDisabled ? 'btn-disabled' : ''
                  }`}
                  disabled={isSubmitDisabled}
                >
                  Rezervovat
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
};
