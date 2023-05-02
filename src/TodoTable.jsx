import { useState } from 'react';
import './App.css';

function App() {
  const [numA, setNumA ] = useState(0);
  const [numB, setNumB ] = useState(0);
  const [result, setResult] = useState(0);

  const inputChangedA = (event) => {
    setNumA(event.target.value);
  }

  const inputChangedB = (event) => {
    setNumB(event.target.value);
  }

  const calcSum = () => {
    setResult(Number(numA) + Number(numB))
  }

  const calcSub = () => {
    setResult(Number(numA) - Number(numB))
  }

  return (
    <>
      <p>Result = {result}</p>
      <input value={numA} onChange={inputChangedA} />
      <input value={numB} onChange={inputChangedB} />
      <button onClick={calcSum}>+</button>
      <button onClick={calcSub}>-</button>
    </>
  );
}

export default App;