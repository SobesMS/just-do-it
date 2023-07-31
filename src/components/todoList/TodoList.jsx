import { useOutletContext } from 'react-router-dom';
import './TodoList.css';

export default function TodoList() {
  const [visibleTodos, deleteTodo] = useOutletContext();

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
          onClick={() => console.log('clicked')}
        />
        <h3>{todo.task}</h3>
        {/* <p>{todo.notes}</p> */}
        <p>{todo.priority}</p>
        <img src="src/assets/note.svg" />
        <img src="src/assets/delete.svg" onClick={() => deleteTodo(todo.id)} />
      </li>
    );
  });

  return <ul>{todoList}</ul>;
}
