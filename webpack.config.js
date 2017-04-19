import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default {
	entry: './src/index',
	output: {
        path: './dist/',
        publicPath: '/',
        filename: './js/bundle.js'
    },
	module: {
        loaders: [
            { test: /.jsx|.js?$/, loader: 'babel-loader' },
            { test: /.sass?$/, loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap') }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/bundle.css')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
