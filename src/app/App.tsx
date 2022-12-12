import React from "react";

import { Button } from "app-design";
import { capitalize } from "common";

import Logo from "./assets/img/app-logo.png";
import { MainWrapper } from "./containers/MainWrapper";

export function App() {
    return (
        <>
            <h1>React TS Starter</h1>
            <img src={Logo} alt="logo" />
            <Button />
            <span>{capitalize("ernest")}</span>
            <MainWrapper />
        </>
    );
}
