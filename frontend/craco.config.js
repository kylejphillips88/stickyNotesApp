module.exports = {
    webpack: {
      configure: {
        optimization: {
          splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
          }
        }
      }
    }
  }