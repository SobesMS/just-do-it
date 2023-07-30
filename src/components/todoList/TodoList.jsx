import { useOutletContext } from 'react-router-dom';
import Todo from '../todo/Todo';
import './TodoList.css';

export default function TodoList() {
  const [todos, setTodos] = useOutletContext();

  const createTodo = (todo) => {
    let priorityText = '';
    let className = 'incomplete';

    // converts todo priority prop to a string
    if (todo.priority === 1) {
      priorityText = 'low';
    }
    if (todo.priority === 2) {
      priorityText = 'medium';
    }
    if (todo.priority === 3) {
      priorityText = 'high';
    }

    // sets className to 'complete' if todo completed prop is true
    if (todo.completed === true) {
      className = 'complete';
    }

    return (
      <li className={className} key={todo.id}>
        <Todo task={todo.task} notes={todo.notes} priority={priorityText} />
      </li>
    );
  };

  const todoList = todos.map((todo) => createTodo(todo));

  return <ul className="listContainer">{todoList}</ul>;
}
