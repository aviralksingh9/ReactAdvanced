const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set to 'production' for production builds
  stats: "verbose", // Show detailed logs

  entry: "./src/index.js", // Entry point for Webpack
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            cacheDirectory: true, // Add cacheDirectory to speed up Babel
          },
        },
      },
      {
        test: /\.css$/, // Process .css files
        use: ["style-loader", "css-loader"], // Apply loaders for CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"), // Serve content from dist
    port: 3000, // Port for development server
    open: true, // Automatically open the browser
  },
};
