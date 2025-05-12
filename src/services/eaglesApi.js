import axios from 'axios';

export const callEaglesApi = (requestType, userInput) => {
  switch (requestType) {
    case 'getAll':
      return getAllPlayers();
    case 'getRandom':
      return getRandomPlayer();
    case 'getSpecificPlayer':
      return getSpecificPlayer(userInput);
    case 'getPositionGroup':
      return getPositionGroup(userInput);
    default:
      return getRandomPlayer();
  }
};

const baseUrl =
  'https://eagles-api-service-189864895985.us-east1.run.app/api/v1';

const getAllPlayers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/players`);
    const { data } = res;

    return data;
  } catch (e) {
    console.log(e);
  }
};

const getRandomPlayer = async () => {
  try {
    const res = await axios.get(`${baseUrl}/players/random`);
    const { data } = await res;

    return [data];
  } catch (e) {
    console.log(e);
  }
};

const getSpecificPlayer = async (jerseyNumber) => {
  try {
    const res = await axios.get(`${baseUrl}/players/${jerseyNumber}`);
    const { data } = res;

    return [data];
  } catch (e) {
    console.log(e);
  }
};

const getPositionGroup = async (positionGroup) => {
  try {
    const res = await axios.get(`${baseUrl}/players/position/${positionGroup}`);
    const { data } = res;

    return data;
  } catch (e) {
    console.log(e);
  }
};
