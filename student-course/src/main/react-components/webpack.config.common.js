const {resolve} = require('path');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entriesDir = [ path.resolve(__dirname, '.') ];

const config = {
	entry: {
		'login-form': [
			'./login-form/index.jsx'
		]
	},
	output: {
		filename: 'js/[name].js',
		path: resolve(__dirname, 'assets'),
		libraryTarget: 'umd'
	},
	context: resolve(__dirname, '.'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: entriesDir,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				include: entriesDir,
				use: ['css-loader']
			},
			{
				test: /\.(png|jpg)$/,
				include: entriesDir,
				use: 'file-loader?name=img/[name].[ext]'
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				include: entriesDir,
				use: 'file-loader?name=fonts/[name].[ext]'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				include: entriesDir,
				use: 'file-loader?name=icons/[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.join(__dirname, '/./'),
			styles: path.join(__dirname, '/./styles/')
		}
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'prop-types': 'PropTypes'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].css',
			disable: false,
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'components-common',
			chunks: 'babel-polyfill'
		}),
		new CleanWebpackPlugin(['./assets'], {verbose: true}),
		new HtmlWebpackPlugin({
			title: 'Development',
			hash: true,
			template: './index.html',
			verbose: false
		})
	]
};

module.exports = config;

