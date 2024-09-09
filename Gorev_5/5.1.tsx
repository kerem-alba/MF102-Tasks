import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState<string>('')
  const [profitRatio, setProfitRatio] =  useState<string>('');
  const [sellingPrice, setSellingPrice] = useState<number| null>(null);
  
  const calculateSalePrice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!price || !profitRatio) {
      alert('Bilgilerinizi kontrol ediniz.');
      return;
    }
    const salePrice = parseFloat(price) * (100 + parseFloat(profitRatio)) / 100;
    setSellingPrice(salePrice);
  };

  return (
    <div className="container">
    <form onSubmit={calculateSalePrice}>
      <div className="form-group">
        <label>
          Fiyatını Girin: 
          <input 
            type="number" 
            value={price} 
            placeholder="0" 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          Kar Oranını Girin: 
          <input 
            type="number" 
            value={profitRatio} 
            placeholder="0" 
            onChange={(e) => setProfitRatio(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <button type="submit">Hesapla</button>
      <br /><br />
      <div className="form-group">
        <label>
          Satış Fiyatı: 
          <input 
            type="number" 
            value={sellingPrice !== null ? sellingPrice : ''} 
            readOnly 
          />
        </label>
      </div>
    </form>
  </div>
  )
}

export default App
