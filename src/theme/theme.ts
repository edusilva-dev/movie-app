import { createTheme } from '@mui/material';
import breakpoints from './breakpoints';
import components from './components';
import palette from './palette';
import shape from './shape';
import typography from './typography';

const theme = createTheme({
  breakpoints,
  components,
  palette,
  shape,
  typography,
});

export default theme;
