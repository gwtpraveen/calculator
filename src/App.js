import { useState } from 'react';
import './App.css';
import Display from './components/display';
import KeyPad from './components/keypad';
import Switch from './components/switch';

function App() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [display, setDisplay] = useState(0);

  const handleInput = (key) => {
    if (["+", "-", "/" , "x", "=", "RESET"].includes(key)) {


    } else {
      setDisplay(preVal => {
        let numb = String(preVal);
        if (key === "DEL") {
          numb = numb.slice(0, -1)
        } else {
          numb += key;
        }
        return (Number(numb))
      });
    }
  };
  
  return (
    <>
    <div className='header'>
      <h1>Calc</h1>
      <Switch/>
    </div>
    <Display displayValue={display}/>
    <KeyPad inputKey={handleInput}/>
    </>
  );
}

export default App;
