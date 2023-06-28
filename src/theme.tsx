import { ThemeOptions } from "@mui/material";
import { PaletteColor } from "./models/theme";

const primaryColor: PaletteColor = {
  main: "#2d398f",
  light: "#5760A5",
  dark: "#1F2764",
  contrastText: "#FFFFFF",
};

const themeOptions = (mode: "light" | "dark"): ThemeOptions => {
  return {
    palette: {
      mode: mode,
      primary: primaryColor,
      contrastThreshold: 4.5,
      background: {
        default: mode === "dark" ? "#121212" : "#FFFFFF",
      },
    },
    spacing: 5,
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h2",
            h2: "h2",
            h3: "h2",
            h4: "h2",
            h5: "h2",
            h6: "h2",
            subtitle1: "span",
            subtitle2: "span",
            body1: "span",
            body2: "span",
          },
        },
      },
    },
  };
};

export default themeOptions;
