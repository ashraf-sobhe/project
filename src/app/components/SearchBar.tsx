"use client";

import { TextField, Box } from "@mui/material";

export default function SearchBar() {
  return (
    <Box mb={3}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="ابحث عن منتج..."
      />
    </Box>
  );
}
