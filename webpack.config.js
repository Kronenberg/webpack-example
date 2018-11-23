
const HtmlWebPackPlugin = require("html-webpack-plugin");
const colors = require('colors');
 
console.info('Masa Web-Pack-Dev-Server is running'.rainbow); 

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const WebPackDevConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
  ],
  devServer: {
      contentBase: './dist'
    }
  }


module.exports = WebPackDevConfig;