var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },{
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },{
                test: /\.css$/, loader: "style-loader!css-loader",
                exclude: [/styles/, /public/]
            }

        ]
    },
    plugins: [
       new webpack.optimize.UglifyJsPlugin(),
       new webpack.optimize.DedupePlugin()
    ]
}