const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
    module: {      
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/, 
          use : ['style-loader', 'css-loader'] 
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'responsive-loader',
              quality: 85,
              mimetype: 'image/png'
            }
          } ]
        },
          {
            test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/,
            use: [
            {
              loader: 'file-loader'
            }]
          },
          {
            test: /\.svg/,
            use: {
            loader: 'svg-url-loader',
            options: {}
            }
          }
        ]
    },
    plugins: [htmlPlugin]
  };