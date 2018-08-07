module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: 'js/',
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      exclude: /node_modules/,
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    open: true
  }
};
