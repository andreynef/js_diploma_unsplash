const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;


let conf = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      // babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        }
      },
      // css
      {
        test: /\.css$/,
        use: [//действие справа налево, сначала less потом css потом style, потом сверху в бандл.
          'style-loader',//style
          {
            loader: 'css-loader',
            options: {
              modules: {//все css файлы воспринимаются как модули
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',//маркировка сгенерированных стилей
              }
            }
          },//css
        ],
        exclude: GLOBAL_CSS_REGEXP // match all css files except GLOBAL_CSS_REGEXP и превращал их в css модули.
      },

      {
        test: GLOBAL_CSS_REGEXP,// матчить только их. И тжсм сделать в серверной чести но без style
        use: ["style-loader", "css-loader"]
      },

      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         hmr: process.env.NODE_ENV === 'development',
      //       },
      //     },
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),//чистка старья/перезапись папки build
    // new MiniCssExtractPlugin({//для css
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // }),
    new HtmlWebpackPlugin({// перезапись html в папку build 
      template: './src/index.html',//копия с шаблона
      favicon: './src/icons/instagram.ico'//вставляет в head
    }),
  ],
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, 'build'),
    // publicPath:'build/'//чтобы девсервер правильно работал. Хз что значит.
  },
};

module.exports = conf;