import React, { useState } from 'react';
import '../../App.css';

type RoomType = 'single' | 'double' | 'suite';

export const SimpleForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState<RoomType>('single');

  // const [errors, setErrors] = useState<Record<string, string>>({});

  // const validate = () => {
  //   const errorsObject: Record<string, string> = {};
  //   if (!fullName.trim()) errorsObject.fullName = 'Zadejte celé jméno.';
  //   if (!email.trim()) errorsObject.email = 'Zadejte e-mail.';
  //   else if (!/^\S+@\S+\.\S+$/.test(email))
  //     errorsObject.email = 'Neplatný formát e-mailu.';
  //   if (!phone.trim()) errorsObject.phone = 'Zadejte telefon.';
  //   else if (!/^\+?[0-9 \-()]{7,}$/.test(phone))
  //     errorsObject.phone = 'Neplatné telefonní číslo.';

  //   console.log({ errorsObject });

  //   setErrors(errorsObject);
  //   return Object.keys(errorsObject).length === 0;
  // };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // if (!validate()) return;

    const payload = {
      fullName,
      email,
      phone,
      roomType,
    };

    console.log('Submitting reservation:', payload);
    alert('Rezervace odeslána! ');

    // setFullName('');
    // setEmail('');
    // setPhone('');

    // setRoomType('double');

    // setErrors({});
  }

  // const isValid = () => {
  //   return (
  //     fullName.trim() &&
  //     email.trim() &&
  //     /^\S+@\S+\.\S+$/.test(email) &&
  //     phone.trim()
  //   );
  // };

  return (
    <div className="form-container">
      <h2 className="form-title">Rezervace hotelového pokoje</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-label">
            <span>Celé jméno</span>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              // className={`form-input
              //   ${errors.fullName ? 'input-error' : ''}`}
              className="form-input"
              placeholder="Jan Novák"
            />
            {/* {errors.fullName && (
              <small className="error-text">{errors.fullName}</small>
            )} */}
          </label>

          <label className="form-label">
            <span>E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              //  className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="email@example.com"
            />
            {/* {errors.email && (
              <small className="error-text">{errors.email}</small>
            )} */}
          </label>

          <label className="form-label">
            <span>Telefon</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              // className={`form-input ${errors.phone ? 'input-error' : ''}`}
              placeholder="+420 123 456 789"
            />
            {/* {errors.phone && (
              <small className="error-text">{errors.phone}</small>
            )} */}
          </label>

          <div className="form-row">
            <label className="form-label">
              <span>Typ pokoje</span>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value as RoomType)}
                className="form-input"
              >
                <option value="single">Single (1 lůžko)</option>
                <option value="double">Double (2 lůžka)</option>
                <option value="suite">Suite</option>
              </select>
            </label>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              // disabled={!isValid()}
              className="submit-btn"
              //  className={`submit-btn ${!isValid() ? 'btn-disabled' : ''}`}
            >
              Rezervovat
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
