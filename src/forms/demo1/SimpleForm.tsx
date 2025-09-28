import '../../App.css';
import React, { useState } from 'react';

type RoomType = 'single' | 'double' | 'suite';

export const SimpleForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState<RoomType>('single');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      fullName,
      email,
      phone,
      roomType,
    };

    console.log('Submitting reservation data:', payload);

    // vymaže formulář po odeslání
    setFullName('');
    setEmail('');
    setPhone('');
    setRoomType('single');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Rezervace hotelového pokoje</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* CELÉ JMÉNO */}
          <label className="form-label">
            <span>Celé jméno</span>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input"
              placeholder="Jan Novák"
            />
          </label>
          {/* E-MAIL */}
          <label className="form-label">
            <span>E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="email@example.com"
            />
          </label>
          {/* TELEFON */}
          <label className="form-label">
            <span>Telefon</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+420 123 456 789"
            />
          </label>
          {/*TYP POKOJE*/}
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
          {/*SUBMIT BUTTON */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Rezervovat
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
