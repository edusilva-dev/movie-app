import { Components, Theme } from '@mui/material';

const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body1,
      color: '#000000',
      fontWeight: 500,
    }),
    shrink: {
      position: 'relative',
      transform: 'none',
    },
    outlined: { marginBottom: '8px' },
  },
};

export default MuiInputLabel;
