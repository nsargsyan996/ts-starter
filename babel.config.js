module.exports = {
    presets: [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {
                runtime: "automatic",
            },
        ],
        "@babel/preset-typescript",
    ],
    plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-object-assign",
        "@babel/plugin-transform-react-constant-elements",
    ],
};
