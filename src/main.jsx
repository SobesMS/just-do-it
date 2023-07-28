import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import TodoList from './components/todoList/TodoList.jsx';
import NewTodo from './components/newTodo/NewTodo.jsx';
import CompletedTodos from './components/completedTodos/CompletedTodos.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <TodoList />,
      },
      {
        path: 'new-todo',
        element: <NewTodo />,
      },
      {
        path: 'completed',
        element: <CompletedTodos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
