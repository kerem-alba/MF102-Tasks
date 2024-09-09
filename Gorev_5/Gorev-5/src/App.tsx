import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<string>('');
  const [square, setSquare] = useState<number | null>(null);

  const calculateSquare = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const num = parseFloat(number);

    if (isNaN(num)) {
      alert("Bilgilerinizi kontrol ediniz.");
      return;
    }
    setSquare(num * num);
  };

  return (
    <div className="container">
      <form onSubmit={calculateSquare}>
        <div className="form-group">
          <label>
            Sayı:
            <input
              type="number"
              value={number}
              placeholder="0"
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button type="submit">Hesapla</button>
        <br /><br />
          <div className="form-group">
            <label>
              Karesi:
              <input type="number" value={square!==null ? square : ""} readOnly />
            </label>
          </div>
      </form>
    </div>
  );
}

export default App;
