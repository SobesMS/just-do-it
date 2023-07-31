import { useOutletContext } from 'react-router-dom';
import Todo from '../todo/Todo';
import './TodoList.css';

export default function TodoList() {
  const [todos, setTodos] = useOutletContext();

  const setClass = (completed) => {
    if (completed) {
      return 'complete';
    } else {
      return 'incomplete';
    }
  };

  const todoList = todos.map((todo) => {
    return (
      <li key={crypto.randomUUID()} className={setClass(todo.completed)}>
        <Todo
          id={todo.id}
          task={todo.task}
          notes={todo.notes}
          priority={todo.priority}
        />
      </li>
    );
  });

  return <ul className="listContainer">{todoList}</ul>;
}
