import { useState, useEffect } from 'react';
import './App.css';
import Display from './components/display';
import KeyPad from './components/keypad';
import Switch from './components/switch';

let output = 0;
function App() {
  const [display, setDisplay] = useState(0);
  const [lastOperator, setLastOperator] = useState("")
  // const [output, setOutput] = useState(0)


  const handleInput = (key) => {
    if (["+", "-", "/" , "x", "=", "RESET"].includes(key)) {
      // todo operators
      if (key === "+") {
        output += display;
        setLastOperator("+");
        setDisplay(0);
      } else if (key === "-") {
        output -= display;
        setLastOperator("-")
        setDisplay(0)
      } else if (key === "x") {
        if (output === 0) {
          output = display;
        }
        output = display * output;
        setLastOperator("x");
        console.log(output)
        setDisplay(0)
      } else if (key === "/") {
        output /= display;
        setLastOperator("/");
        setDisplay(0);
      } else if (key === "=") {
        if (lastOperator === "+") {
          output += display;
          setDisplay(output)
        } else if (lastOperator === "-") {
          output -= display;
          setDisplay(output);
        } else if (lastOperator === "x") {
          output *= display;
          setDisplay(output);
        } else if (lastOperator === "/") {
          output /= display;
          setDisplay(output);
        }
      } else if (key === "RESET") {
        output = 0;
        setDisplay(0);
        setLastOperator(null)
      }
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
