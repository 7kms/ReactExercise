const { resolve } = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // context: resolve(__dirname, '../src'),
    entry: {
      hmr: [
        'react-hot-loader/patch',
        // 开启 React 代码的模块热替换(HMR)

        'webpack-dev-server/client?http://localhost:8080',
        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口

        'webpack/hot/only-dev-server',
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
      ],
      app: [
        '../src/index.js'
        // 我们 app 的入口文件
      ],
      vendor: [
        'babel-polyfill',
        'react',
        'react-dom'
      ]
    },
    output: {
      path: resolve(__dirname, '../dist'),

      publicPath: '/dist/',
      // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)

      filename: '[name].[chunkhash:6].js'
      // 输出的打包文件
    },
    resolve: {
      alias: {
        'react': resolve(__dirname, '../node_modules/react'),
        'react-dom': resolve(__dirname, '../node_modules/react-dom'),
      }
    },
    devtool: '#cheap-module-source-map',

    devServer: {
        hot: true,
        // 开启服务器的模块热替换(HMR)

        contentBase: resolve(__dirname, 'dist'),
        // 输出文件的路径

        publicPath: '/dist/',
            // 和上文 output 的“publicPath”值保持一致
    },

    module: {
        rules: [
          {
            enforce: 'pre',
            test:  /\.jsx?$/,
            use: 'eslint-loader',
            exclude: /node_modules/
          },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
              test: /\.less$/,
              use: ExtractTextPlugin.extract({
                use: ['css-loader',{
                  loader: 'postcss-loader',
                  options: {
                    plugins: [require('autoprefixer')({
                      browsers: ['last 10 versions']
                    })]
                  }
                },'less-loader']
              })
            },
          {
            test: /\.(jpg|png|gif)$/,
            use: 'file-loader'
          }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

        new ExtractTextPlugin('[name].[contenthash:6].css'),
        // 单独提取入口依赖的css文件


        new HtmlWebpackPlugin({
          title: 'react-exercise',
          filename: 'index.html'
        }),

        // extract dev runtime to a special file
        new webpack.optimize.CommonsChunkPlugin({
          name: 'hmr'
        }),
        // extract vendor chunks for better caching
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function (module) {
            // a module is extracted into the vendor chunk if...
            return (
              // it's inside node_modules
              /node_modules/.test(module.context) &&
              // and not a CSS file (due to extract-text-webpack-plugin limitation)
              !/\.css$/.test(module.request)
            )
          }
        }),

        // extract webpack runtime & manifest to avoid vendor chunk hash changing
        // on every build.
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest'
        })
    ]
};