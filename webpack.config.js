const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Use development mode for quick builds
  entry: "./src/index.js", // Entry point for the application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory on disk
    filename: "static/js/[name].[contenthash].js", // Main bundle filename
    chunkFilename: "static/js/[name].[contenthash].js", // Dynamic chunk filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JS files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            cacheDirectory: true, // Cache for faster builds
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Split all chunks (including vendor and async chunks)
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Split node_modules into its own chunk
          name: "vendors", // Name for the chunk
          chunks: "all", // Split all node_modules chunks
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template for the app
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"), // Serve content from dist folder
    port: 3000, // Port for development server
    open: true, // Automatically open browser
    devMiddleware: {
      writeToDisk: true, // Ensure that chunks are written to disk in development
    },
  },
};
