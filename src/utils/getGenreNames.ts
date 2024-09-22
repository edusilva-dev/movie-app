import { Genre } from "@api/types";

export default function getGenresNames(movieGenresIds: number[], genresList?: Genre[]) {
  if (!genresList) return []

  return genresList?.filter(genre => movieGenresIds.includes(genre.id)).map(genre => genre.name)
}
