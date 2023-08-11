import { Link, useOutletContext } from 'react-router-dom';
import './NewTodo.css';

export default function NewTodo() {
  const [setOnNewTodo] = useOutletContext();

  return (
    <>
      <h2>New ToDo</h2>
      <Link to="/">
        <button onClick={() => setOnNewTodo(false)}>Cancel</button>
      </Link>
    </>
  );
}
