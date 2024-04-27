import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Philadelphia Eagles Roster API
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
