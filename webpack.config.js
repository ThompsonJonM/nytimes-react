// Webpack Config

// Dependencies
import path from 'path';
import webpack from 'webpack';

const buildDirectory = './dist/';

export const webpackConfig = {
    entry: './lib/main.jsx',

    /* This will configure the dev server which helps
    recompile script. */
    devServer: {
        hot: true,
        inline: true,
        port: 7700,
        historyApiFallback: true,
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    /* Output tells Webpack what to create using app script.
    This will then be hosted on 7700. */
    output: {
        path: path.resolve(buildDirectory),
        filename: 'app.js',
        publicPath: 'http://localhost:7700/dist',
    },

    /* These are for Enzyme to ensure that it works properly
    during the testing phase. */
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
            },
        }],
    },

    plugins: [],
};