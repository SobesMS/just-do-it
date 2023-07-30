import { useOutletContext } from 'react-router-dom';
import Todo from '../todo/Todo';
import './TodoList.css';

export default function TodoList() {
  const [todos, setTodos] = useOutletContext();

  // converts priority code to a string and returns an array of Todo components
  const todoList = todos.map((todo) => {
    let priorityText = '';
    if (todo.priority === 1) {
      priorityText = 'low';
    }
    if (todo.priority === 2) {
      priorityText = 'medium';
    }
    if (todo.priority === 3) {
      priorityText = 'high';
    }

    return (
      <li>
        <Todo task={todo.task} notes={todo.notes} priority={priorityText} />
      </li>
    );
  });

  return (
    <div className="listContainer">
      <ul>{todoList}</ul>
    </div>
  );
}
