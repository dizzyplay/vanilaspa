const path = require('path')

module.exports ={
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer:{
    contentBase: path.resolve(__dirname,'src'),
    port:8080
  }
}
