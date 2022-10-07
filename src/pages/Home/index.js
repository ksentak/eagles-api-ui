import { useState } from 'react';
import _ from 'lodash';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import DynamicSelect from './components/DynamicSelect';
import Footer from './components/Footer';

import { callEaglesApi } from '../../services/eaglesApi';
import { validateApiInput } from '../../utils/validationUtils';

const Home = () => {
  const [requestType, setRequestType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [playerData, setPlayerData] = useState([]);
  const [validationMessage, setValidationMessage] = useState('');

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

  const makeApiCall = async () => {
    setValidationMessage('');
    const { isValidInput, errorMessage } = validateApiInput(
      requestType,
      userInput,
    );

    if (isValidInput) {
      const res = await callEaglesApi(requestType, userInput);
      setPlayerData(res);
    } else {
      setValidationMessage(errorMessage);
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Philadelphia Eagles Roster API (2022)
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
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
              current roster (2022). The API was built with NestJS and is
              deployed on AWS through a serverless Lambda.
            </Typography>
            <DynamicSelect
              requestType={requestType}
              handleTypeChange={handleTypeChange}
              handleInputChange={handleInputChange}
            />
            <Stack
              sx={{ pt: 2 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Button variant='contained' onClick={makeApiCall}>
                Make API Call
              </Button>
              <Button variant='outlined' onClick={clearData}>
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
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Grid container spacing={4}>
            {!_.isEmpty(playerData) &&
              _.map(playerData, (player) => (
                <Grid item key={player.id} xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {player.first_name} {player.last_name}
                      </Typography>
                      <Typography>Number: {player.number}</Typography>
                      <Typography>Height: {player.height}</Typography>
                      <Typography>Weight: {player.weight}</Typography>
                      <Typography>Position: {player.position}</Typography>
                      <Typography>College: {player.college}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
