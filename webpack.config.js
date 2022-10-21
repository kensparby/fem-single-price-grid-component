const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    bundle: __dirname + "/src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/dist",
    },
    historyApiFallback: true,
    open: false,
    port: 3000,
    compress: true,
    hot: true,
    watchFiles: {
      paths: ["src/**/*.{html,js}"],
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/,
        include: __dirname + "/src",
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.{png|jpg|jpeg|svg|gif}$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "sass-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Single Price Grid Component",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
