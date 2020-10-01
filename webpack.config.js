const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mainBundleConfig = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    sockPort: 3000,
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api': { target: { host: 'back-end', protocol: 'http:', port: 3001 }, changeOrigin: true, secure: false },
    },
  },
  devtool: 'eval-source-map',
  entry: {
    app: './client/app.jsx',
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'css/style.css' })],
  module: {
    rules: [
      { test: /\.[jt]sx?$/, loader: 'babel-loader' },
      { test: /\.scss$/, use: [{ loader: MiniCssExtractPlugin.loader, options: { hmr: true } }, 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: [{ loader: MiniCssExtractPlugin.loader, options: { hmr: true } }, 'css-loader'] },
    ],
  },
}

module.exports = [
  mainBundleConfig,
]
