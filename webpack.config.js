module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-md-loader'
      }
    ]
  },
  externals: {
      vega: 'vega',
      vegaLite: 'vega-lite',
      vegaEmbed: 'vega-embed'
    }
  };