module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
    ]
  },
  externals: {
      vega: 'vega',
      vegaLite: 'vega-lite',
      vegaEmbed: 'vega-embed'
    }
  };