import { useState } from 'react'
import './App.css'

function App() {
  const [shortEdge, setShortEdge] = useState<string>('')
  const [longEdge, setLongEdge] =  useState<string>('');
  const [area, setArea] = useState<number| null>(null);
  const [perimeter, setPerimeter] = useState<number| null>(null);
  
  const calculateAreaAndPerimeter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!shortEdge || !longEdge) {
      alert('Bilgilerinizi kontrol ediniz.');
      return;
    }
    const calculatedArea = parseFloat(shortEdge) * parseFloat(longEdge)
    setArea(calculatedArea);
    const calculatedPerimeter = 2* (parseFloat(shortEdge) + parseFloat(longEdge))
    setPerimeter(calculatedPerimeter);
  };

  return (
    <div className="container">
    <form onSubmit={calculateAreaAndPerimeter}>
      <div className="form-group">
        <p>Alanı ve çevresi hesaplanacak olan dikdörtgen için: </p>
        <label>
          Kısa Kenar : 
          <input 
            type="number" 
            value={shortEdge} 
            placeholder="0" 
            onChange={(e) => setShortEdge(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          Uzun Kenar :
          <input 
            type="number" 
            value={longEdge} 
            placeholder="0" 
            onChange={(e) => setLongEdge(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <button type="submit">Hesapla</button>
      <br /><br />
      <div className="form-group">
        <label>
          Alan :
          <input 
            type="number" 
            value={area !== null ? area : ''} 
            readOnly 
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label>
          Çevre :
          <input 
            type="number" 
            value={perimeter !== null ? perimeter : ''} 
            readOnly 
          />
        </label>
      </div>
    </form>
  </div>
  )
}

export default App
