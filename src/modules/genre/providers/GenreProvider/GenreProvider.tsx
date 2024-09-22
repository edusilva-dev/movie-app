import { useGetGenres } from "@api/hooks/useGetGenres";
import { GetGenreResponse } from "@api/types";
import { GenreContext } from "@modules/genre/contexts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function GenreProvider(props: PropsWithChildren) {
  const { children } = props

  const { data: { genres }, refetch } = useSuspenseQuery<GetGenreResponse>(useGetGenres())

  return (
    <GenreContext.Provider value={{ genres, refetch }}>
      {children}
    </GenreContext.Provider>
  )
}
