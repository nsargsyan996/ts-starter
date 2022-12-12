import React from "react";

import { addDecorator } from "@storybook/react";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
        default: "figma",
        values: [
            { name: "bardeen", value: "#26C2D0" },
            { name: "dark", value: "#2f2f33" },
            { name: "figma", value: "#f2f3f4" },
            { name: "melon", value: "#FF605A" },
            { name: "plum", value: "#6F60CC" },
        ],
        grid: {
            cellSize: 20,
            opacity: 0.5,
            cellAmount: 5,
            offsetX: 16,
            offsetY: 16,
        },
    },
    chromatic: { pauseAnimationAtEnd: true },
    controls: {
        sort: "alpha",
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
        theme: {
            base: "light",

            colorPrimary: "#FF4785",
            colorSecondary: "#1EA7FD",

            // UI
            appBg: "#F6F9FC",
            appContentBg: "#FFFFFF",
            appBorderColor: "rgba(0,0,0,.1)",
            appBorderRadius: 4,

            // Typography
            fontBase: "system-ui, sans-serif",
            fontCode: "monospace",

            // Text colors
            textColor: "#333333",
            textInverseColor: "#FFFFFF",

            // Toolbar default and active colors
            barTextColor: "#999999",
            barSelectedColor: "#1EA7FD",
            barBg: "#FFFFFF",

            // Form colors
            inputBg: "#FFFFFF",
            inputBorder: "#999999",
            inputTextColor: "#333333",
            inputBorderRadius: 4,

            brandTitle: "Design Components",
        },
    },
};

addDecorator((Story) => <Story />);
