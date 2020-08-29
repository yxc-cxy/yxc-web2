var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


require('webpack');
module.exports = {
  entry: './src/man.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

// 打包css
  module: {
    rules: [
      {
		  
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
	  {
	   test: /\.(png|jpg|gif|eot|ttf|svg|woff|woff2)$/,
	    use: [
				{
				  loader: 'file-loader',
				  options: {}
				}
			  ]
	    }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
	  template:'./src/index.html'
  })]


};