import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Plus, XrayView } from 'iconoir-react';
import { getTodos } from './utilities/storageUtil';
import './Root.css';

let nextId = 1;

export default function Root() {
  const [visibleTodos, setVisibleTodos] = useState(getTodos());
  const [hideCompleted, setHideCompleted] = useState(false);

  // adds a todo to the todos state
  const addTodo = () => {};

  // deletes a todo from the todo state
  const deleteTodo = (id) => {
    const index = visibleTodos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const newTodos = visibleTodos.toSpliced(index, 1);
      localStorage.removeItem(id);
      setVisibleTodos(newTodos);
    }
  };

  // sets hideCompleted state
  const hideCompletedTodos = () => {
    if (true) {
      setHideCompleted(true);
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
    setVisibleTodos([...visibleTodos, todo]);
  };

  return (
    <div>
      <div className="mainContainer">
        <header>
          <div className="titleContainer">
            <h1>ToDo IT</h1>
            <input type="text" />
            <button>Search</button>
          </div>
          <div className="optionsContainer">
            <p>Hide completed</p>
            <input type="checkbox" name="" id="" />
          </div>
        </header>
        <Outlet context={[visibleTodos, deleteTodo]} />
      </div>
      <footer>&copy;2023 - Matt Sobek</footer>
    </div>
  );
}
