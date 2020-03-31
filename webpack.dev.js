const path=require('path');
const webpack=require('webpack');
const baseConfig=require('./webpack.base');
const merge=require('webpack-merge')
const devConfig={
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        hot: true,
        hotOnly: true
    },
    optimization: {
        usedExports: true
    },
    plugins:[new webpack.HotModuleReplacementPlugin()]
}
module.exports=merge(baseConfig,devConfig)