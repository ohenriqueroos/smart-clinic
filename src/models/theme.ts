export interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

declare module "@mui/material/styles" {
  export interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export interface TTheme {
  mode: "light" | "dark";
  menuOpen: boolean;
}
