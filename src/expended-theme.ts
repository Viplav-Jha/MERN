// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// Extend the PaletteColor interface to include a numeric index signature
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  // Extend the Palette interface to include the tertiary color
  interface Palette {
    tertiary: PaletteColor;
  }
}
