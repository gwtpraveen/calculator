import { useState } from 'react';
import './App.css';
import Display from './components/display';
import KeyPad from './components/keypad';
import Switch from './components/switch';

function App() {
  const [output, setOutput] = useState(0)
  const [display, setDisplay] = useState(0);

  const handleInput = (key) => {
    setDisplay(preVal => {
      let numb = Number(preVal);

      if (["+", "-", "/" , "x", "=", "RESET"].includes(key)) {
        if (["RESET", "="].includes(key)) {
          if (key === "=") {
            // TODO equal key
          } else {
            // TODO reset btn 
          }
        } else {
          if (key === "+") {
            // TODO additoin 
          } else if (key === "-") {
            // TODO subtraction 
          } else if (key === "/") {
            // TODO divide
          } else if (key === "x") {
            // TODO multiplication 
          }
        }
  
      } else {
        // display user input 
        numb = String(numb)
          if (key === "DEL") {
            numb = numb.slice(0, -1)
          } else {
            numb += key;
          }
      }

      return (Number(numb));
    });
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
