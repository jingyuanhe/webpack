const baseConfig=require('./webpack.base');
const merge=require('webpack-merge');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const prodConfig={
    mode:'production',
    devtool:'cheap-module-source-map',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: [['@babel/preset-env',{
                        "targets": {
                            "edge": "17",
                            "firefox": "60",
                            "chrome": "67",
                            "safari": "11.1",
                        },
                        'useBuiltIns':'usage',
                        "modules": false 
                    }],'@babel/react'],
                    
                    }
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:2048,
                        name:'[name].[ext]',
                        outputPath: 'images/'
                    }
                }],

            },{
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,{
                    loader:'css-loader',
                    options:{
                        importLoaders:2
                    }
                },'sass-loader','postcss-loader']
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        outputPath:'font/'
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    plugins:[new MiniCssExtractPlugin(), new GenerateSW ({
        clientsClaim: true,
        skipWaiting: true
    })]
}
module.exports=merge(baseConfig,prodConfig)