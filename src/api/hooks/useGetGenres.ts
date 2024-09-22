import api from "@api";
import { GetGenreResponse } from "@api/types";
import { useMemo } from "react";

export function useGetGenres() {
  return useMemo(
    () => ({
      queryKey: ['genres'],
      queryFn: async () => (await api.get<GetGenreResponse>('/genre/movie/list')).data,
      staleTime: Infinity,
    }),
    []
  )
}
