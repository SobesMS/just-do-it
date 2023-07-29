import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Plus, XrayView } from 'iconoir-react';
import './Root.css';

let nextId = 1;

export default function Root() {
  const [todos, setTodos] = useState([]);

  const newTodo = (task, priority, notes) => {
    const todo = {
      id: nextId,
      task: task,
      priority: priority,
      notes: notes,
      completed: false,
    };
    nextId++;
    setTodos([...todos, todo]);
  };

  return (
    <div className="mainContainer">
      <header>
        <h1>ToDo IT</h1>
      </header>
      <Outlet />
    </div>
  );
}
