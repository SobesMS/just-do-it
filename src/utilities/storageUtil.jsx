import { populateSampleData } from './sampleDataUtil';
import { moveCompletedToBottom } from './listUtil';

export const getTodos = (hideCompleted) => {
  if (localStorage.length === 0) {
    populateSampleData();
  }
  const data = [];
  const keys = Object.keys(localStorage).sort();
  if (hideCompleted) {
    for (let i in keys) {
      const todo = JSON.parse(localStorage.getItem(keys[i]));
      if (!todo.completed) {
        data.push(todo);
      }
    }
  } else {
    for (let i in keys) {
      const todo = JSON.parse(localStorage.getItem(keys[i]));
      data.push(todo);
    }
  }

  /* for (let i in keys) {
    data.push(JSON.parse(localStorage.getItem(keys[i])));
  } */
  return moveCompletedToBottom(data);
};

export const addTodoToDB = () => {};

export const deleteTodoFromDB = (id) => {};
