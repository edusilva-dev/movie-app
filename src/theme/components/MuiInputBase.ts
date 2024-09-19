import { Components, Theme } from '@mui/material';

const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.h3,
    }),
  },
};

export default MuiInputBase;
