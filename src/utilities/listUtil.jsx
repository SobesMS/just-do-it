export const moveCompletedToBottom = (todos) => {
  const incomplete = [];
  const completed = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) {
      completed.push(todos[i]);
    } else {
      incomplete.push(todos[i]);
    }
  }
  return incomplete.concat(completed);
};

export function sortByTaskAsc(a, b) {}

export function sortByTaskDec(a, b) {}
