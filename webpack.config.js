const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'vue-input-mask': './src/index.ts',
    'vue-input-mask.min': './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'VueInputMask',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
