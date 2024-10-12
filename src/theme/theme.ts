// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      letterSpacing: ".024em",
      fontWeight: "bold",
      color: "#253858"
    },

    subtitle1: {
      fontSize: "1.3rem",
      letterSpacing: ".024em",
      fontWeight: "600",
      color: "#253858"
    },
    subtitle2: {
      fontSize: "1rem",
      letterSpacing: ".024em",
      fontWeight: "600",
      color: "#253858"
    },
    body1: {
      fontSize: "1rem",
      color: "#253858"
    }
  }
});

export default theme;
