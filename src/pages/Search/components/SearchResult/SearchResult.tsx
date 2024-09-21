import { useGetSearch } from "@api/hooks"
import { Box, Stack, Typography } from "@mui/material"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

export default function SearchResult() {
  const [searchParams] = useSearchParams()

  const query = searchParams.get('q') || ''

  const { data } = useSuspenseQuery(useGetSearch(query))

  return (
    <Stack gap={2.5}>
      {data?.results?.map((movie) => (
        <Stack key={movie.id} direction='row' gap={2}>
          <Box
            component='img'
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            sx={(theme) => ({
              width: '182px',
              borderRadius: theme.spacing(2)
            })}
            loading="lazy"
          />
          <Stack gap={1.5}>
            <Typography variant="h3" fontWeight='bold'>{movie.title}</Typography>
            <Typography variant="h3" fontWeight='medium'>{Math.floor(5 * (movie.vote_average || 0))}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}
