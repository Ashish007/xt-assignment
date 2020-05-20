const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template:'./src/index.html',
    filename:'./index.html'
});

module.exports = {
    // entry:{
    //     client: './src/client.js',
    //     bundle: './src/bundle.js'
    // },
    // output:{
    //     path: path.resolve(__dirname, 'assets')
    // },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use:["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|gif|jpeg|jpg|svg|ico)/,
                use:[
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [htmlPlugin]
}