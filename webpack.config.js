const path = require("path");

module.exports = {
  target: "web",
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
          ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
           options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
           }
       }]
     },
     {
      test: /\.(jpg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
         options: {
            name: '[name].[ext]',
            outputPath: 'images/'
         }
     }]
   }
    ],
  }
};