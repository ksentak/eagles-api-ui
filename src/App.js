import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
