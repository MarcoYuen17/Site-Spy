const path = require("path");

module.exports = {
    mode: "development", 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "dist/bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["@babel/preset-react", "@babel/preset-env"],
                    }
                }
            }
        ]
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx'] 
    },
};