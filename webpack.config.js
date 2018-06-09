const webpack = require('webpack');
const path = require('path');
    
    module.exports = {
      entry: './src/app.js',
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react', 'stage-1']
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
        ]
      },
      watch: true
    }