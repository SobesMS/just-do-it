import { populateSampleData } from './sampleDataUtil';

export const getTodos = () => {
  if (localStorage.length === 0) {
    populateSampleData();
  }
  const data = [];
  const keys = Object.keys(localStorage).sort();
  for (let i in keys) {
    data.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return data;
};

export const addTodoToDB = () => {};

export const deleteTodoFromDB = (id) => {};
