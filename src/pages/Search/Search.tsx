import { Page, PageContent, PageHeader } from "@modules/page";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { SearchField } from "@modules/search-field";
import { Suspense } from "react";
import { SearchResult } from "./components";

export default function Search() {
  return (
    <Page>
      <PageHeader
        title={
          <Stack direction="row">
            <Typography variant="h1" color="white">Search</Typography>
            <Typography variant="h1" color="primary.main" alignSelf="flex-end">.</Typography>
          </Stack>
        }
        canGoBack
      />
      <PageContent>
        <Stack gap={3}>
          <SearchField />
          <Suspense fallback={
            <Stack width='100%' alignItems='center' justifyContent='center'>
              <CircularProgress />
            </Stack>
          }>
            <SearchResult />
          </Suspense>
        </Stack>
      </PageContent>
    </Page>
  )
}
