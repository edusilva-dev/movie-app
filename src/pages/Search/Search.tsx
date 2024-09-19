import { Page, PageContent, PageHeader } from "@modules/page";
import { Stack, Typography } from "@mui/material";

export default function Search() {
  return (
    <Page>
      <PageHeader title={
        <Stack direction='row'>
          <Typography variant="h1" color="white">Search</Typography>
          <Typography variant="h1" color="primary.main" alignSelf='flex-end'>.</Typography>
        </Stack>
      } canGoBack />
      <PageContent>
        <Typography>Conteúdo aqui</Typography>
      </PageContent>
    </Page>
  )
}
