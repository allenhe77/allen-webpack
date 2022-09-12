const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "allen-main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
