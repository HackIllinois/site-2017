var path = require('path')

var config = {
  entry: './src/index.js',
  output: {
    path: './dist/js',
    filename: 'bundle.js',
    publicPath: '/dist/js/'
  },
  devServer: {
    inline: true,
    historyApiFallback: true, 
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
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/, loader: 'file-loader',
        include: path.resolve(process.cwd(), 'src')
      },
      {
        test: /\.jpg$/, loader: 'file-loader',
        include: path.join(process.cwd(), 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!resolve-url',
        include: path.join(process.cwd(), 'src')
      }
    ]
  }
}

module.exports = config
