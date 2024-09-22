import { GenreContext } from "@modules/genre/contexts";
import { useContext } from "react";

export default function useGenreContext() {
  const genreContext = useContext(GenreContext)

  if (!genreContext) throw new Error('useGenreContext hook must be uset within GenreProvider')

  return genreContext
}
