import React from "react";

import { render } from "@testing-library/react";

import { MainWrapper } from "./index";

test("renders main wrapper container", () => {
    const { getByText } = render(<MainWrapper />);
    const linkElement = getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
});
