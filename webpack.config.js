var path = require('path')

var config = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        include: path.resolve(process.cwd(), 'src')
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader',
        include: path.resolve(process.cwd(), 'src')
      },
      {
        test: /\.svg$/, loader: 'file-loader',
        include: path.join(process.cwd(), 'src')
      }
    ]
  }
}

module.exports = config
