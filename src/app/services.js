import mockData from '../mockdata.json';

export const fetcUserDetails = () => {
  return new Promise((resolve) => {
    resolve(mockData.profile);
  });
};

export const fetchEarthQuakeData = () => {
  return new Promise((resolve) => {
    resolve(mockData.data);
  });
};

export const fetchEarthQuakeDataById = (id) => {
  return new Promise((resolve) => {
    resolve(mockData.data.features.find((f) => f.id === id));
  });
};
