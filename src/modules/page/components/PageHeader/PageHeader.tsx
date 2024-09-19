import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import backIcon from '@assets/icons/back.svg'

export type PageHeaderProps = {
  title?: ReactNode;
  canGoBack?: boolean
};

export default function PageHeader(props: PageHeaderProps) {
  const { title, canGoBack = false } = props;

  const navigate = useNavigate();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        gap={4}
      >
        {canGoBack && <Box component="img" src={backIcon} onClick={() => navigate(-1)} sx={{ cursor: 'pointer' }} />}
        {title}
      </Stack>
    </Stack>
  );
}
