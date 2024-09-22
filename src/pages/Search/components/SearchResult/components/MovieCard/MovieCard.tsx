import { MovieResult } from '@api/types'
import { useGenreContext } from '@modules/genre'
import { Box, Stack, Typography } from '@mui/material'
import getGenresNames from '@utils/getGenreNames'

import bookmarkIcon from '@assets/icons/bookmark.svg'
import { Link } from 'react-router-dom'

type MovieCardProps = {
  movie: MovieResult
}

export default function MovieCard(props: MovieCardProps) {
  const { movie } = props

  const { genres } = useGenreContext()

  return (
    <Stack component={Link} direction='row' gap={2} to={`/movie_detail/${movie.id}`} sx={{ textDecoration: 'none' }}>
      <Stack position='relative'>
        <Box
          component='img'
          src={bookmarkIcon}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            cursor: 'pointer'
          }}
          loading="lazy"
        />
        <Box
          component='img'
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          sx={(theme) => ({
            width: '182px',
            borderRadius: theme.spacing(2),
            opacity: 0.5
          })}
          loading="lazy"
        />
      </Stack>
      <Stack gap={1.5}>
        <Typography
          variant="h3"
          fontWeight='bold'
          color='text.primary'
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          {movie.title}
        </Typography>
        <Typography
          variant="h3"
          fontWeight='medium'
          color='text.primary'
        >
          {(5 * ((movie.vote_average || 0) / 10)).toFixed(1)}
        </Typography>
        <Typography variant="body2" color='text.primary'>
          {getGenresNames(movie.genre_ids, genres).join(', ')}
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
  )
}
