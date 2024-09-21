import api from "@api/api";
import { GetSearchResponse } from "@api/types";
import { useMemo } from "react";

export default function useGetSearch(search: string) {
  return useMemo(() => ({
    queryKey: ['search', search],
    queryFn: async () => (await api.get<GetSearchResponse>(`/search/movie?query=${search}`)).data
  }), [search])
}
