module.exports = {
    stories: ["../src/app-design/**/*.stories.mdx", "../src/app-design/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-addon-designs"],
    core: {
        builder: "webpack5",
    },
    typescript: {
        reactDocgen: "none",
    },
    babelrc: {
        presets: ["@babel/env", "@babel/preset-typescript", "@babel/preset-react"],
        plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-private-methods", { loose: true }],
    },
    webpackFinal: async (config) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({ test: /\.pdf$/, use: [{ loader: "file-loader" }] });

        const fileLoaderRule = config.module.rules.find((rule) => rule.test.test(".svg"));
        fileLoaderRule.exclude = /\.react.svg$/;

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.react\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                    },
                },
            ],
        });

        // Return the altered config
        return config;
    },
};
