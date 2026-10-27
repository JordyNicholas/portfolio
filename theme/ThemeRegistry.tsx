"use client"

import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./index";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}