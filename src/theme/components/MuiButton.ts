import { Components, Theme } from '@mui/material';

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body1,
      textTransform: 'initial',
      borderRadius: '5px',
    }),
  },
  variants: [
    {
      props: { variant: 'outlined', color: 'primary' },
      style: ({ theme }) => ({ color: theme.palette.text.primary }),
    },
    {
      props: { variant: 'contained', color: 'primary', disabled: true },
      style: ({ theme }) => ({
        color: `${theme.palette.primary.contrastText} !important`,
        backgroundColor: `${theme.palette.primary.main} !important`,
      }),
    },
  ],
};

export default MuiButton;
