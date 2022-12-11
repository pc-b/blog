const path = require('path')

export default {
  root: path.resolve(__dirname, 'dist'),
  server: {
    port: 8080,
    hot: true
  }
}
