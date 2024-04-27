import _ from 'lodash';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import {
  REQUEST_TYPES,
  NON_INPUT_REQUEST_TYPES,
  POSITION_GROUPS,
} from '../../../constants/constants';

const DynamicSelect = ({
  handleTypeChange,
  handleInputChange,
  requestType,
  requestInput,
}) => {
  const invalidRequestType =
    _.isEmpty(requestType) || _.includes(NON_INPUT_REQUEST_TYPES, requestType);

  return (
    <Stack
      sx={{ pt: 4 }}
      direction={{ sm: 'column', md: 'row' }}
      spacing={3}
      justifyContent='center'
    >
      <FormControl sx={{ minWidth: 300 }} size='small'>
        <InputLabel id='request-select'>API</InputLabel>
        <Select
          labelId='request-select'
          value={requestType}
          onChange={handleTypeChange}
          label='API'
        >
          {_.map(REQUEST_TYPES, (type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {!invalidRequestType && requestType === 'getSpecificPlayer' && (
        <FormControl sx={{ minWidth: 300 }} size='small'>
          <InputLabel id='request-select'>Jersey Number</InputLabel>
          <Select
            labelId='jersey-select'
            value={requestInput}
            onChange={handleInputChange}
            label='Jersey Number'
            required
          >
            {[...Array(100).keys()].map((num) => (
              <MenuItem key={num} value={_.toString(num)}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {!invalidRequestType && requestType === 'getPositionGroup' && (
        <FormControl sx={{ minWidth: 300 }} size='small'>
          <InputLabel id='request-select'>Position</InputLabel>
          <Select
            labelId='position-select'
            value={requestInput}
            onChange={handleInputChange}
            label='Position'
          >
            {_.map(POSITION_GROUPS, (position) => (
              <MenuItem key={position.value} value={position.value}>
                {position.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
};

export default DynamicSelect;
