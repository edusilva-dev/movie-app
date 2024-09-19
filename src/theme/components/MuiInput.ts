import { Components, Theme } from '@mui/material';

const MuiInput: Components<Theme>['MuiInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,
      marginTop: '0 !important',
    }),
    underline: {
      paddingTop: '12px !important',
      paddingBottom: '12px !important',
      '::before': {
        borderBottomColor: '#E5EBEF',
      },
    },
  },
};

export default MuiInput;
