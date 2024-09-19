import { Components, Theme } from '@mui/material';

const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,
    }),
  },
};

export default MuiInputBase;
