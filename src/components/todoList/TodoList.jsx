import { useOutletContext, Link } from 'react-router-dom';
import './TodoList.css';

export default function TodoList() {
  const [visibleTodos, deleteTodo, toggleCompleted] = useOutletContext();

  const todoList = visibleTodos.map((todo) => {
    const setClass = (completed) => {
      if (completed) {
        return 'todoItem complete';
      } else {
        return 'todoItem incomplete';
      }
    };

    const setCheckboxImage = (completed) => {
      if (completed) {
        return 'src/assets/checked.svg';
      } else {
        return 'src/assets/unchecked.svg';
      }
    };

    return (
      <li key={todo.id} className={setClass(todo.completed)}>
        <img
          src={setCheckboxImage(todo.completed)}
          onClick={() => toggleCompleted(todo.id)}
        />
        <h3>{todo.task}</h3>
        <p>{todo.priority}</p>
        <img src="src/assets/edit.svg" />
        <img src="src/assets/delete.svg" onClick={() => deleteTodo(todo.id)} />
      </li>
    );
  });

  return (
    <>
      <Link to="/new-todo" className="newTodoButton">
        <h3>New Todo</h3>
      </Link>
      <ul>{todoList}</ul>
    </>
  );
}
