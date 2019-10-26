module.exports = {
  chainWebpack: config => {
    config.module
    .rule('md')
      .test(/\.md/)
        .use('vue-loader')
          .loader('vue-loader')
          .end()
        .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
            })
  },
  chainWebpack: config =>{
    config.module
    .rule('img')
      .test(/\.(png|jpe?g|gif)$/i)
        .use('file-loader')
          .loader('file-loader')
  }
}

