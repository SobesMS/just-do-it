import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { getTodos } from './utilities/storageUtil';
import './Root.css';

let nextId = 1;

export default function Root() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [visibleTodos, setVisibleTodos] = useState(getTodos(hideCompleted));
  const [onNewTodo, setOnNewTodo] = useState(false);

  useEffect(() => {});

  // adds a todo to localStorage and updates visibleTodos state
  const addTodo = () => {};

  // deletes a todo from localStorage and updates visibleTodos state
  const deleteTodo = (id) => {
    localStorage.removeItem(id);
    setVisibleTodos(getTodos(hideCompleted));
  };

  // marks a todo as completed in localStorage and updates visibleTodos state
  const toggleCompleted = (id) => {
    const todo = JSON.parse(localStorage.getItem(id));
    todo.completed = !todo.completed;
    localStorage.setItem(id, JSON.stringify(todo));
    setVisibleTodos(getTodos(hideCompleted));
  };

  // sets hideCompleted state
  const hideCompletedTodos = () => {
    setHideCompleted(!hideCompleted);
    console.log(`I ran! ${hideCompleted}`);
    // setVisibleTodos(!hideCompleted);
  };

  // TODO - this function will move to the newTodo component
  const newTodo = (task, priority, notes) => {
    const todo = {
      id: nextId,
      task: task,
      priority: priority,
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
          </div>
          {!onNewTodo ? (
            <Link
              to="/new-todo"
              onClick={() => setOnNewTodo(true)}
              className="newTodoButton"
            >
              <img src="src/assets/add.svg" />
              <h3>New Todo</h3>
            </Link>
          ) : null}
        </header>
        <Outlet
          context={[visibleTodos, deleteTodo, toggleCompleted, setOnNewTodo]}
        />
      </div>
      <footer>&copy;2023 - Matt Sobek</footer>
    </div>
  );
}
