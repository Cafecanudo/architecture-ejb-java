const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  mode: "development",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: './bundle.js'
  },
  devServer: {
    hot: true,
    port: 8000,
    compress: true,
    contentBase: [
      path.join(__dirname, "public"),
      path.join(__dirname, "src/resources")
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  }
};
