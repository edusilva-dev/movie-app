import { Container, ContainerProps, Stack } from '@mui/material';
import { PropsWithChildren, useLayoutEffect, useRef } from 'react';

export type PageProps = ContainerProps;

export default function Page(props: PropsWithChildren<PageProps>) {
  const { children, ...containerProps } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    containerRef.current?.parentElement?.scrollTo(0, 0);
  }, []);

  return (
    <Container
      {...containerProps}
      disableGutters
      ref={containerRef}
      maxWidth={false}
      sx={{ maxWidth: 1072, zIndex: 0 }}
    >
      <Stack gap={6}>{children}</Stack>
    </Container>
  );
}
