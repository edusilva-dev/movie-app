import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function LayoutRoot(props: PropsWithChildren) {
  const { children } = props

  return (
    <Stack direction="row" width="100%">
      {children}
    </Stack>
  )
}