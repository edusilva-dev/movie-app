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
          backgroundColor: theme.palette.grey[800],
          padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          borderRadius: theme.shape.borderRadius * 0.25, // 10px
        },
      }),
    },
  ],
};

export default MuiTextField;
