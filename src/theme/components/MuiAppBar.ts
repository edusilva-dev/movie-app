import { Components, Theme } from '@mui/material';

const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      height: '75px',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      border: theme.palette.grey[800]
    }),
  },
};

export default MuiAppBar;
