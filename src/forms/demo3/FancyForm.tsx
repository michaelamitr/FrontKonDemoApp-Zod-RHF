import '../../App.css';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingFormSchema, type bookingFormValues } from '../demo2/schema';
import { SelectInput } from './SelectInput';
import { TextInput } from './TextInput';
import { SubmitButton } from './SubmitButton';

export const FancyForm = () => {
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
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<bookingFormValues> = (data) => {
    console.log('Submitting reservation:', data);
    methods.reset();
  };

  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Rezervace hotelového pokoje</h2>
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
              <SubmitButton />
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};
