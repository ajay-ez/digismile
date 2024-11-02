// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      letterSpacing: ".024em",
      fontWeight: "bold",
      color: "#253858",
      fontFamily: "serif"
    },

    subtitle1: {
      fontSize: "1.8rem",
      letterSpacing: ".024em",
      fontWeight: "600",
      color: "#253858",
      fontFamily: "serif"
    },
    subtitle2: {
      fontSize: "1.2rem",
      letterSpacing: ".024em",
      fontWeight: "600",
      color: "#253858",
      fontFamily: "serif"
    },
    body1: {
      fontSize: "1.1rem",
      color: "#253858",
      fontFamily: "Playfair Display serif"
    }
  }
});

export default theme;
