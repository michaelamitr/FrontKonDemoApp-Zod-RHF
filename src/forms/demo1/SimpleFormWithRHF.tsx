import '../../App.css';
import { useForm, type SubmitHandler } from 'react-hook-form';

type RoomType = 'single' | 'double' | 'suite';
interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  roomType: RoomType;
}

export const SimpleFormWithRHF = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      roomType: 'single',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Submitting reservation:', data);
    reset(); //  vymaže formulář po odeslání
  };

  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Rezervace hotelového pokoje</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-grid">
            {/* CELÉ JMÉNO */}
            <label className="form-label">
              <span>Celé jméno</span>
              <input
                {...register('fullName')}
                className="form-input"
                placeholder="Jan Novák"
              />
            </label>
            {/*E-MAIL */}
            <label className="form-label">
              <span>E-mail</span>
              <input
                type="email"
                {...register('email')}
                className="form-input"
                placeholder="email@example.com"
              />
            </label>
            {/* TELEFON */}
            <label className="form-label">
              <span>Telefon</span>
              <input
                {...register('phone')}
                className="form-input"
                placeholder="+420 123 456 789"
              />
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
              </label>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Rezervovat
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
