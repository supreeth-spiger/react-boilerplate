module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './',
    publicPath: '/public/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|.scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
};
