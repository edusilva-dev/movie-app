import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import searchIcon from "@assets/icons/search.svg"
import { useSearchParams } from "react-router-dom";
import useDebounce from "@hooks/useDebouce/useDebounce";

export type SearchFieldProps = TextFieldProps;

export default function SearchField(props: SearchFieldProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');

  const handleSearch = useCallback((search: string) => {
    setSearchParams((prevSearchParams) => {
      if (search) prevSearchParams.set('q', search);
      else prevSearchParams.delete('q');

      return prevSearchParams;
    });
  }, []);

  const debouncedSetSearch = useDebounce(handleSearch, 1000);

  useEffect(() => {
    const search = searchParams.get('q') || '';
    setQuery(search);
  }, [searchParams]);

  return (
    <TextField
      {...props}
      value={query}
      autoComplete="off"
      onChange={(e) => {
        const search = e.target.value;
        setQuery(search);
        debouncedSetSearch(search);
      }}
      variant="standard"
      placeholder="Search"
      fullWidth={true}
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[800],
        borderRadius: '10px',
        px: 2,
        py: 3,
      })}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Box component="img" src={searchIcon} mr={1.5} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }
      }}
    />
  )
}
