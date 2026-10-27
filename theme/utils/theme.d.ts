import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    status: { onGoing: string; completed: string };
  }
  interface PaletteOptions {
    status?: { onGoing: string; completed: string };
  }
}