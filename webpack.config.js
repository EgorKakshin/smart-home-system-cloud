const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.sass', '.scss'],
        alias: {
            actions: path.resolve(__dirname, 'src/actions'),
            components: path.resolve(__dirname, 'src/components'),
            constants: path.resolve(__dirname, 'src/constants'),
            containers: path.resolve(__dirname, 'src/containers'),
            entities: path.resolve(__dirname, 'src/entities'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            resources: path.resolve(__dirname, 'src/resources'),
            sagas: path.resolve(__dirname, 'src/sagas'),
            store: path.resolve(__dirname, 'src/store'),
            uikit: path.resolve(__dirname, 'src/uikit'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: '/node_modules/',
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets',
                    },
                }],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true,
                    },
                  },
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
    ],
};
