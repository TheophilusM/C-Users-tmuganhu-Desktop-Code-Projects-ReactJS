import { useState } from 'react';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(1)

  return (
    <div className="page-center">
      <section>
        <div>
          <label htmlFor='minutes'>Count down minutes: </label>
          <input 
            id='minutes' 
            type='number' 
            placeholder='(min)' 
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min={1}
            >
            </input>
        </div>
        <div>
          <button>START</button>
          <button>PAUSE</button>
        </div>
        <div>
          <p>You are half way complete!</p>
        </div>
        <div>
          <p>Alomst done</p>
        </div>
        <div>
          <p>00:00</p>
        </div>
        <div>
          <button>x1</button>
          <button>x1.5</button>
          <button>x2</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
