import { useContext } from 'react';
import { CouterContext } from './contexts/CounterContext';
import './App.css';

function App() {

  const {counter, increment, decrement} = useContext(CouterContext)

  return (
    <div className="App App-header">
      <h1>{counter}</h1>
      <span>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => increment()}>+</button>
      </span>
    </div>
  );
}

export default App;
