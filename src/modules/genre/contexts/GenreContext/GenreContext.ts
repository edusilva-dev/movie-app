import { GetGenreResponse } from "@api/types";
import { createContext } from "react";

export type GenreContextStore = {
  genres: GetGenreResponse['genres'] | undefined
  refetch: () => void
}

const GenreContext = createContext<GenreContextStore | null>(null)

export default GenreContext
