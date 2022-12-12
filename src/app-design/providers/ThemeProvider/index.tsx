import React from "react";

import { createTheme, ThemeProvider } from "@mui/material";

import { MuiTheme, MyGlobalStyles } from "../../theme";

export interface MyThemeProviderProps {
    children: React.ReactNode;
}

export const MyThemeProvider = (props: MyThemeProviderProps) => {
    const { children } = props;
    const theme = createTheme(MuiTheme);

    return (
        <>
            <MyGlobalStyles />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
};
