import { useGetSearch } from "@api/hooks"
import { Stack, Typography } from "@mui/material"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "./components"

export default function SearchResult() {
  const [searchParams] = useSearchParams()

  const query = searchParams.get('q') || ''

  const { data } = useSuspenseQuery(useGetSearch(query))

  if (!query) return

  return (
    <Stack gap={3.75}>
      <Typography variant="h3">Search results ({data?.results?.length})</Typography>
      <Stack gap={2.5}>
        {data?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Stack>
    </Stack>
  )
}
