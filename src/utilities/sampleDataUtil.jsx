export const populateSampleData = () => {
  sampleData.forEach((record) => {
    localStorage.setItem(record.id, JSON.stringify(record));
  });
};

export const sampleData = [
  {
    id: 1978,
    task: 'wash clothes',
    priority: 'low',
    completed: false,
  },
  {
    id: 1979,
    task: 'do dishes',
    priority: 'low',
    completed: false,
  },
  {
    id: 1980,
    task: 'cut grass',
    priority: 'medium',
    completed: false,
  },
  {
    id: 1981,
    task: 'paint bedroom',
    priority: 'high',
    completed: true,
  },
  {
    id: 1982,
    task: 'cook dinner',
    priority: 'medium',
    completed: true,
  },
  {
    id: 1983,
    task: 'study coding',
    priority: 'high',
    completed: false,
  },
];
