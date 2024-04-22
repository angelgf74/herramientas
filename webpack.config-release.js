const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SOURCE_WWW = path.resolve(__dirname, "www.src");

module.exports = {
  context: SOURCE_WWW,
  mode: 'production',
  entry: {
    //main: './src/es/index.js',
    //polyfill: 'babel-polyfill',
    app:[
        path.resolve(__dirname, 'www.src/es/index.js'),
        //path.resolve(__dirname, 'www.src/scss/styles.scss')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'js/bundle.js'
  },
  plugins: [    
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'index.html',
      hash: true
    }),
    
    new MiniCSSExtractPlugin({filename: "css/bundle.css",}),
	  new CopyWebpackPlugin({
        patterns:
        [      
          //{ from: "*.*"},
          { from: "css/**/*", globOptions:{ignore: ['**/*.svg']} },
          { from: "vendor/**/*" },
          { from: "html/**/*", globOptions:{ignore: ['**/*.js']}},
          /* any other files you need to copy */
        ]
    })    
  ],
  module: {
    rules : [
      { test: /\.css$/, loader: "css-loader" },
      { test: /\.scss$/, loader: "sass-loader" }
    ]
  }
};