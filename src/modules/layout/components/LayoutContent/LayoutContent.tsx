import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function LayoutContent(props: PropsWithChildren) {
  const { children } = props

  return (
    <Stack width='100%' px={2} py={4} mb='75px'>
      {children}
    </Stack>
  )
}
