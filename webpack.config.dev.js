module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env'],
        },
      },
    ],
  },
};