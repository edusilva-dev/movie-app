import { CircularProgress, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import theme from "@theme";
import { Suspense } from "react";
import { GenreProvider } from "@modules/genre";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false, throwOnError: false } },
})

export default function AppRouteProviders() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Suspense
          fallback={
            <Stack alignItems="center" justifyContent="center" height="100vh">
              <CircularProgress sx={{ color: 'primary' }} />
            </Stack>
          }
        >
          <GenreProvider>
            <Outlet />
          </GenreProvider>
        </Suspense>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
