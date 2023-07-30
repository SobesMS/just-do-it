import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import TodoList from './components/todoList/TodoList.jsx';
import NewTodo from './components/newTodo/NewTodo.jsx';
import EditTodo from './components/editTodo/EditTodo.jsx';
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
        path: 'edit-todo',
        element: <EditTodo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
