var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: process.cwd() + '/',
  entry: {
    '/js/app.js': './app/app.js',
    '/css/app.css': './app/css/app.scss',
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "./",
    filename: "[name]",
    sourceMapFilename: "bundle.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },{
      test: [/\.js$/, /\.es6$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css', { allChunks: true }),
  ],
  resolve: {
    extensions: ['', '.js', '.es6'],
    modulesDirectories: [
      'app',
      'app/components',
      'node_modules',
    ]
  }
}
