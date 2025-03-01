
const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const envFile = './.env'

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
      react: path.resolve('./node_modules/react')
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x?)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        type: 'json'
      }
    ],
    
  },
  devServer: {
    static: './public',
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    },
    compress: true,
    port: 3000,
  },
  optimization: {
    minimize: true,
    emitOnErrors: true,
    mangleExports: 'size',
    mangleWasmImports: true,
    moduleIds: 'named'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),

    new Dotenv({
      path: envFile,
      safe: true,
      systemvars: true
    }),
  ]
}