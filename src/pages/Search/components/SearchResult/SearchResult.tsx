import { useGetSearch } from "@api/hooks"
import { useGenreContext } from "@modules/genre"
import { Box, Stack, Typography } from "@mui/material"
import { useSuspenseQuery } from "@tanstack/react-query"
import getGenreNames from "@utils/getGenreNames"
import { useSearchParams } from "react-router-dom"

export default function SearchResult() {
  const [searchParams] = useSearchParams()

  const query = searchParams.get('q') || ''

  const { genres } = useGenreContext()

  const { data } = useSuspenseQuery(useGetSearch(query))

  return (
    <Stack gap={3.75}>
      <Typography variant="h3">Search results ({data?.results?.length})</Typography>
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
              <Typography
                variant="h3"
                fontWeight='bold'
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                {movie.title}
              </Typography>
              <Typography variant="h3" fontWeight='medium'>{(5 * ((movie.vote_average || 0) / 10)).toFixed(1)}</Typography>
              <Typography variant="body2">
                {getGenreNames(movie.genre_ids, genres).join(', ')}
              </Typography>
              <Typography
                variant="body2"
                color="grey.700"
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 5,
                }}
              >
                {movie.overview}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
