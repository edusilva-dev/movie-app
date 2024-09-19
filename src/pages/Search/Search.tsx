import { Page, PageContent, PageHeader } from "@modules/page";
import { Stack, Typography } from "@mui/material";
import { SearchField } from "@modules/search-field";

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
        <Stack>
          <SearchField />
        </Stack>
      </PageContent>
    </Page>
  )
}
