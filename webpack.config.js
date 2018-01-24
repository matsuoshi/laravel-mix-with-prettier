module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'prettier-loader'
      },
      {
        test: /\.scss$/,
        loader: 'prettier-loader',
        options: {
          parser: "postcss"
        }
      }
    ]
  }
};
