import _ from 'lodash';
import { NON_INPUT_REQUEST_TYPES } from '../constants/constants';

const formatPlayerData = (players) => {
  const formattedPlayers = _.map(players, (player) => ({
    id: player.id,
    number: player.number,
    first_name: player.first_name,
    last_name: player.last_name,
    position: player.position === 'pk' ? 'K' : _.upperCase(player.position),
    height: player.height,
    weight: player.weight,
    age: player.age,
    years_pro: player.years_pro,
    college: player.college,
  }));

  return formattedPlayers;
};

const disableApiCall = (requestType, userInput) => {
  if (_.includes(NON_INPUT_REQUEST_TYPES, requestType)) {
    return false;
  } else if (
    !_.includes(NON_INPUT_REQUEST_TYPES, requestType) &&
    !_.isEmpty(userInput)
  ) {
    return false;
  }

  return true;
};

export { formatPlayerData, disableApiCall };
