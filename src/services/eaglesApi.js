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
  const res = await fetch(
    'https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players',
  );
  const data = await res.json();

  return data;
};

const getRandomPlayer = async () => {
  const res = await fetch(
    'https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players/random',
  );
  const data = await res.json();

  return [data];
};

const getSpecificPlayer = async (jerseyNumber) => {
  const res = await fetch(
    `https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players/${jerseyNumber}`,
  );
  const data = await res.json();

  return [data];
};

const getPositionGroup = async (positionGroup) => {
  const res = await fetch(
    `https://5o1j7ybsh2.execute-api.us-east-1.amazonaws.com/prod/players/position/${positionGroup}`,
  );
  const data = await res.json();

  return data;
};
