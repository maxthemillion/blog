module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: '@import "src/styles/variables.scss";'
        }
      }
    },
    chainWebpack: config => {
        config.module
        .rule('md')
          .test(/\.md/)
            .use('vue-md-loader')
      }
  };