import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Root.css';

export default function Root() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="mainContainer">
      <header>
        <h1>ToDo IT</h1>
        <h1>{counter}</h1>
        <button onClick={() => increaseCount()}>increase</button>
        <button onClick={() => resetCounter()}>reset</button>
        <Outlet />
      </header>
    </div>
  );
}
