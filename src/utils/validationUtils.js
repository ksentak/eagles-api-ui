import _ from 'lodash';
import { VALID_POSITIONS } from '../constants/constants';

const validObj = {
  isValidInput: true,
  errorMessage: '',
};

export const validateApiInput = (requestType, userInput) => {
  switch (requestType) {
    case 'getAll':
      return validObj;
    case 'getRandom':
      return validObj;
    case 'getSpecificPlayer':
      return validateJerseyNumber(userInput);
    case 'getPositionGroup':
      return validatePositionGroup(userInput);
    default:
      return false;
  }
};

const validateJerseyNumber = (jerseyNumber) => {
  if (!_.inRange(jerseyNumber, 1, 100)) {
    return {
      isValidInput: false,
      errorMessage: 'Please enter a valid jersey number (0-99)',
    };
  }

  return validObj;
};

const validatePositionGroup = (positionGroup) => {
  if (!_.includes(VALID_POSITIONS, positionGroup)) {
    return {
      isValidInput: false,
      errorMessage: 'Please enter a valid position group',
    };
  }
  return validObj;
};
