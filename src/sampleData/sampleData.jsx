export const populateSampleData = () => {
  sampleData.forEach((record) => {
    localStorage.setItem(record.id, JSON.stringify(record));
  });
};

export const getSampleData = () => {
  const data = [];
  const keys = Object.keys(localStorage);
  keys.sort();
  for (let i in keys) {
    data.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return data;
};

export const sampleData = [
  {
    id: 1978,
    task: 'wash clothes',
    priority: 'low',
    notes: 'washer then dryer',
    completed: false,
  },
  {
    id: 1979,
    task: 'do dishes',
    priority: 'low',
    notes: 'use hot water',
    completed: false,
  },
  {
    id: 1980,
    task: 'cut grass',
    priority: 'medium',
    notes: 'charge mower battery',
    completed: false,
  },
  {
    id: 1981,
    task: 'paint bedroom',
    priority: 'high',
    notes: 'mix paint',
    completed: true,
  },
  {
    id: 1982,
    task: 'cook dinner',
    priority: 'medium',
    notes: 'buy steak',
    completed: true,
  },
];
