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
    <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
      <FormControl sx={{ minWidth: 300 }} size='small'>
        <InputLabel>API</InputLabel>
        <Select value={requestType} onChange={handleTypeChange}>
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
      />
    </Stack>
  );
};

export default DynamicSelect;
