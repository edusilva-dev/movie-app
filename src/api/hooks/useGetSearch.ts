import api from "@api/api";
import { GetSearchResponse } from "@api/types";
import { useMemo } from "react";

export default function useGetSearch() {
  return useMemo(() => ({
    queryKey: ['search'],
    queryFn: async (search: string) => (await api.get<GetSearchResponse>(`/search/movie?query=${search}`)).data
  }), [])
}
