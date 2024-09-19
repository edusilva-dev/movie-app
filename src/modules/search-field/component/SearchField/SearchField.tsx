import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

import searchIcon from "@assets/icons/search.svg"

export type SearchFieldProps = TextFieldProps;

export default function SearchField(props: SearchFieldProps) {
  const [query, setQuery] = useState('');

  return (
    <TextField
      {...props}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
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
