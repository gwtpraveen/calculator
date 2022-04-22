import './App.css';
import Display from './components/display';
import KeyPad from './components/keypad';
import Switch from './components/switch';

function App() {
  return (
    <>
    <div className='header'>
      <h1>Calc</h1>
      <Switch/>
    </div>
    <Display/>
    <KeyPad/>
    </>
  );
}

export default App;
