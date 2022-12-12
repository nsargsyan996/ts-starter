import React from "react";

import { ButtonWrapper } from "./styles";

export interface ButtonProps {
    mode?: "primary";
}

export function Button() {
    return (
        <div>
            <ButtonWrapper>
                <p>Design Button</p>
            </ButtonWrapper>
        </div>
    );
}
