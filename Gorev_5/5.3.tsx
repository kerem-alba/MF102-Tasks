import { useState } from 'react'
import './App.css'

function App() {
  const [unitPrice, setUnitPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  
  const calculateTotalPrice  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!unitPrice || !quantity) {
      alert('Bilgilerinizi kontrol ediniz.');
      return;
    }
    setTotalPrice(parseFloat(quantity) * parseFloat(unitPrice));
  };

  return (
    <div className="container">
    <form onSubmit={calculateTotalPrice}>
      <div className="form-group">
        <label>
          Birim Fiyatı : 
          <input 
            type="number" 
            value={unitPrice} 
            placeholder="0" 
            onChange={(e) => setUnitPrice(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          Adet :
          <input 
            type="number" 
            value={quantity} 
            placeholder="0" 
            onChange={(e) => setQuantity(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <button type="submit">Hesapla</button>
      <br /><br />
      <div className="form-group">
        <label>
          Toplam Tutar :
          <input 
            type="number" 
            value={totalPrice !== null ? totalPrice : ''} 
            readOnly 
          />
        </label>
      </div>
    </form>
  </div>
  )
}

export default App
