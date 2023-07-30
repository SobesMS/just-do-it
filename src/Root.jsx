import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Plus, XrayView } from 'iconoir-react';
import { sampleData } from './sampleData/sampleData';
import './Root.css';

let nextId = 1;

export default function Root() {
  const [todos, setTodos] = useState(sampleData);
  const [showCompleted, setShowCompleted] = useState(false);

  // adds a todo to the todos state
  const addTodo = () => {};

  // deletes a todo from the todo state
  const deleteTodo = () => {};

  // sets showCompleted state
  const toggleShowCompleted = () => {
    if (true) {
      setShowCompleted(true);
    }
  };

  // TODO - this function will move to the newTodo component
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
      <Outlet context={[todos, setTodos]} />
    </div>
  );
}
