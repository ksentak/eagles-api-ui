import _ from 'lodash';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const PlayerGrid = ({ playerData }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
      <Grid container spacing={4}>
        {!_.isEmpty(playerData) &&
          _.map(playerData, (player) => (
            <Grid key={player.id} item xs={12} sm={6} md={4}>
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
  );
};

export default PlayerGrid;
