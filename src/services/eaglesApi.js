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

const getAllPlayers = async () => {
  try {
    const res = await axios.get(
      'https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players',
    );
    const { data } = res;

    return data;
  } catch (e) {
    console.log(e);
  }
};

const getRandomPlayer = async () => {
  try {
    const res = await axios.get(
      'https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players/random',
    );
    const { data } = await res;

    return [data];
  } catch (e) {
    console.log(e);
  }
};

const getSpecificPlayer = async (jerseyNumber) => {
  try {
    const res = await axios.get(
      `https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players/${jerseyNumber}`,
    );
    const { data } = res;

    console.log([data]);
    return [data];
  } catch (e) {
    console.log(e);
  }
};

const getPositionGroup = async (positionGroup) => {
  try {
    const res = await axios.get(
      `https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players/position/${positionGroup}`,
    );
    const { data } = res;

    return data;
  } catch (e) {
    console.log(e);
  }
};
