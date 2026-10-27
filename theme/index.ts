import { createTheme } from "@mui/material/styles";
import { brand } from "./utils/tokens";
import { typography } from "./utils/typography";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: brand.primaryDark},
    background: { default: "#121212", paper: "#1E1E1E"},
    status: brand.status
  },
  typography
})

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: brand.primaryLight},
    background: { default: "#F5F5F5", paper: "#FFFFFF"},
    status: brand.status
  },
  typography
})