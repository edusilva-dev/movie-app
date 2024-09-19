import { Components, Theme } from '@mui/material';

const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: {
    underline: 'hover',
  },
  styleOverrides: {
    root: {
      cursor: 'pointer',
    },
  },
};

export default MuiLink;
