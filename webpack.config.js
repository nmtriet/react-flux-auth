var path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
};