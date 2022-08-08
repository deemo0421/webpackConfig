const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      //檔案名稱每次都不一樣，保證用戶一定重新採錄檔案，看到最新版的內容，避免瀏覽器cache問題
      //每次bundle都要改名字，需要plugin解決
      filename: 'main.[hash].bundle.js', 
  },
  devServer: {
      static: {                               
        directory: path.join(__dirname, './dist'),  
      },
      hot: true,
    },
  //Loaders
  module: {
    rules: [
      {
        test: /\.css$/i, //正規表達式 /\.(css|scss))$/i 多個檔案寫法
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template:'./base.html'
    }),
    new MiniCssExtractPlugin({
      filename:'main.[hash].css'
    })
],
};


