const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
    entry:{
        main:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js'
    },
    optimization:{
        usedExports: true,
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),new CleanWebpackPlugin()]
}