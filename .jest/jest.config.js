const path = require("path");

const esModules = [ "@nanostores/react", "nanostores" ].join("|");

module.exports = {
    cache: true,
    verbose: true,

    rootDir: path.resolve(__dirname, ".."),

    // The root of source code
    roots: [ "<rootDir>/src" ],

    // Coverage
    coverageDirectory: path.resolve(__dirname, "../coverage"),
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
        "!<rootDir>/src/app-design/**",
        "!<rootDir>/src/**/*.d.ts",
        "!<rootDir>/src/app/*/index.{ts,tsx,js,jsx}",
        "!<rootDir>/src/common/*/index.{ts,tsx,js,jsx}",
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/app/App.tsx",
        "<rootDir>/src/app/index.tsx",
        "<rootDir>/src/common/index.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        }
    },
    coverageReporters: [ "text", "json", "html" ],

    errorOnDeprecated: true,

    // Runs special logic, such as cleaning up components when using React Testing Library and adds special extended assertions to Jest
    setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ],

    // Test spec file resolution pattern
    testMatch: [ "<rootDir>/src/**/*.test.{ts,tsx}" ],

    // Module file extensions for importing
    moduleFileExtensions: [ "ts", "tsx", "js" ],

    testEnvironment: "jsdom",

    // ESM modules
    transformIgnorePatterns: [ `/node_modules/(?!${esModules})` ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"
    }
};
