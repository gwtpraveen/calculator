import { useState, useEffect } from 'react';
import './App.css';
import Display from './components/display';
import KeyPad from './components/keypad';
import Switch from './components/switch';

function App() {
  const [display, setDisplay] = useState(0);
  const [lastOperator, setLastOperator] = useState(null);
  const [newOperator, setNewOpeator] = useState(null);
  const [equal, setEqual] = useState(false);
  const [number1, setNumber1] =  useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    if (lastOperator === "+") setNumber2(preVal => preVal + number1);
    else if (lastOperator === "-") {
      setNumber2(preVal => {
        if (preVal === 0) {
          return number1;
        } else {
          return preVal - number1;
        }
      });
    }
    else if (lastOperator === "/") {
      setNumber2(preVal => {
        if (preVal === 0) {
          return number1;
        } else if (number1 !== 0) {
          return preVal / number1;
        }
      });
    }
    else if (lastOperator === "x") {
      setNumber2(preVal => {
        if (preVal === 0) {
          return number1;
        } else {
          return preVal * number1;
        }
      });
    }
    setLastOperator(newOperator);
    setNewOpeator(null);

  }, [number1, lastOperator, newOperator]);

  useEffect(() => {
    if (equal) {
      setDisplay(number2);
    }
  }, [equal, number2])


  const handleInput = (key) => {
    if (["+", "-", "/" , "x", "=", "RESET"].includes(key)) {
      // todo operators
      if (key === "+") {
        if (lastOperator === null) setLastOperator("+");
        setNewOpeator("+");
        setNumber1(display);
        setDisplay(0);
      } else if (key === "-") {
        if (lastOperator === null) setLastOperator("-");
        setNewOpeator("-");
        setNumber1(display);
        setDisplay(0);
      } else if (key === "/"){
        if (lastOperator === null) setLastOperator("/");
        setNewOpeator("/");
        setNumber1(display);
        setDisplay(0);
      } else if (key === "x") {
        if (lastOperator === null) setLastOperator("x");
        setNewOpeator("x");
        setNumber1(display);
        setDisplay(0);
      } else if (key === "=") {
        setNumber1(display);
        setEqual(true);
      } else if (key === "RESET") {
        setDisplay(0);
        setLastOperator(null);
        setNumber1(0);
        setNumber2(0);
        setEqual(false);
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
