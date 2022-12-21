import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const theme = createTheme({
  palette: {
     primary: {
      main: "#183a03",
      light:"#183A03"
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    }
  },
});
