const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SOURCE_WWW = path.resolve(__dirname, "www.src");


module.exports = {
  context: SOURCE_WWW,
  // mode: 'development',
  mode: 'development',
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
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
          
          { from: "*.json"},
          { from: "*.js"},
          { from: "*.txt"},
          { from: "img/**/*" },
          { from: "css/**/*", globOptions:{ignore: ['**/*.svg']} },
          // { from: "js/**/*" },
          // { from: "vendor/**/*" },
          //{ from: "lib/**/*" },
          { from: "html/**/*", globOptions:{ignore: ['**/*.js']}},
          /* any other files you need to copy */
        ]
    })    
  ],

  
  module: {
    rules : [
      { 
        test: /\.css$/, 
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader"
        ]
      },

      { 
        test: /\.scss$/, 
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    fallback: { path: require.resolve("path-browserify") },
    },
  

};