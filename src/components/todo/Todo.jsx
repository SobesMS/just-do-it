import './Todo.css';

export default function Todo(props) {
  return (
    <>
      <h3>{props.task}</h3>
      <p>{props.notes}</p>
      <p>{props.priority}</p>
    </>
  );
}
