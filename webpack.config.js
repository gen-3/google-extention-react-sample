const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'src/scripts/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'chrome/scripts'),
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
    ]
  },
};