import { Components, Theme } from '@mui/material';

const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,
      backgroundColor: theme.palette.grey[900],
    }),
    colorPrimary: ({ theme }) => ({
      ...theme.typography.body2,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }),
  },
};

export default MuiChip;
