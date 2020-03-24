import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmers.json`)
    .then((response) => {
      const farmersObjects = response.data;
      const farmers = [];
      Object.keys(farmersObjects).forEach((farmerId) => {
        farmersObjects[farmerId].id = farmerId;
        farmers.push(farmersObjects[farmerId]);
      });
      resolve(farmers);
    })
    .catch((err) => reject(err));
});

export default { getFarmers };
