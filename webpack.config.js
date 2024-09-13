const path = require("path");

module.exports = {
    entry: {
        array_to_do_list: "./src/array_to_do_list.ts",
        popup: "./src/popup.ts",
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
    mode: "development",
};
