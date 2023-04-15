import { useState } from 'react';
import _ from 'lodash';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Navbar from './components/Navbar';
import DynamicSelect from './components/DynamicSelect';
import PlayerGrid from './components/PlayerGrid';
import Loader from './components/Loader';
import Footer from './components/Footer';

import { callEaglesApi } from '../../services/eaglesApi';
import { validateApiInput } from '../../utils/validationUtils';

const Home = () => {
  const [requestType, setRequestType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [playerData, setPlayerData] = useState([]);
  const [validationMessage, setValidationMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTypeChange = (e) => {
    setRequestType(e.target.value);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    validateApiInput(e.target.value);
  };

  const clearData = () => {
    setRequestType('');
    setUserInput('');
    setPlayerData([]);
    setValidationMessage('');
  };

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

  const makeApiCall = async () => {
    setIsLoading(true);
    setValidationMessage('');
    const { isValidInput, errorMessage } = validateApiInput(
      requestType,
      userInput,
    );

    if (isValidInput) {
      const res = await callEaglesApi(requestType, userInput);
      const formattedData = formatPlayerData(res);
      setPlayerData(formattedData);
    } else {
      setValidationMessage(errorMessage);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='md'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Eagles API
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              paragraph
            >
              An interactive user interface for the Eagles-API. The API allows
              users to obtain basic information about players that are on the
              current roster (2023). The API was built with NestJS and is
              deployed on AWS through a serverless Lambda.
            </Typography>
            <DynamicSelect
              requestType={requestType}
              handleTypeChange={handleTypeChange}
              handleInputChange={handleInputChange}
              requestInput={userInput}
            />
            <Stack
              sx={{ mt: 1, pt: 2 }}
              direction={{ sm: 'column', md: 'row' }}
              spacing={2}
              justifyContent='center'
            >
              <Button
                variant='contained'
                disabled={!requestType}
                onClick={makeApiCall}
              >
                Make API Call
              </Button>
              <Button sx={{ mt: 1 }} variant='outlined' onClick={clearData}>
                Clear
              </Button>
            </Stack>
            {validationMessage && (
              <Typography color='error.main' align='center' sx={{ mt: 2 }}>
                {validationMessage}
              </Typography>
            )}
          </Container>
        </Box>
        {isLoading && <Loader />}
        {playerData.length > 0 && <PlayerGrid playerData={playerData} />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
