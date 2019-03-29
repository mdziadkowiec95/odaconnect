module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  watch: false,
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