import { Components, Theme } from '@mui/material';

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {
    root: {
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      borderRadius: '10px',
    },
    input: {
      padding: '25px 16px !important',
    },
    notchedOutline: ({ theme }) => ({
      borderColor: theme.palette.divider,
    }),
  },
};

export default MuiOutlinedInput;
