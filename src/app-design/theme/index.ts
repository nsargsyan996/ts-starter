import { createTheme } from "@mui/material/styles";

export * from "./mixins";
export * from "./GlobalStyles";

export const MuiTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#000000",
        },
    },
});
