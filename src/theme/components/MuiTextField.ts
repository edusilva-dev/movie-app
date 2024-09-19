import { Components, Theme, inputBaseClasses } from '@mui/material';

const MuiTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    fullWidth: true,
  },
  variants: [
    {
      props: {
        multiline: true,
        variant: 'filled',
      },
      style: ({ theme }) => ({
        [`.${inputBaseClasses.root}`]: {
          padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          borderRadius: theme.shape.borderRadius * 2,
        },
      }),
    },
  ],
};

export default MuiTextField;
