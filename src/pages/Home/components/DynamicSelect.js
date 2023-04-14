import _ from 'lodash';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {
  REQUEST_TYPES,
  NON_INPUT_REQUEST_TYPES,
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
      <TextField
        disabled={invalidRequestType}
        label='Jersey #/Position'
        variant='outlined'
        size='small'
        value={requestInput}
        onChange={handleInputChange}
        sx={{ mt: 1 }}
      />
    </Stack>
  );
};

export default DynamicSelect;
