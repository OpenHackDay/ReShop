const path = require('path')
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  const indexCSSExtract = new MiniCssExtractPlugin('css/[index].css')

  return {
    entry: {
      index: path.join(__dirname, '/web/src/index.js')
    },
    output: {
      path: path.join(__dirname, '/web/assets/dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
          query: {
            presets: [ 'env', 'react' ],
            plugins: ['transform-class-properties']
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [ 'style-loader', { loader: 'css-loader', options: { sourceMap: true } } ]
        },
        {
          test: /\.(png|gif|svg|jpe?g)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                gifsicle: {
                  interlanced: false
                },
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
              }
            }
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      port: 3000,
      contentBase: path.join(__dirname, '/web/assets/dist'),
      historyApiFallback: true,
      open: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      https: false,
      disableHostCheck: true
    },
    plugins: [
      indexCSSExtract,
      new HtmlWebpackPlugin({
        filename: 'index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true
        },
        inject: false,
        template: path.join(__dirname, '/web/src/index.html')
      })
    ]
  }
}
