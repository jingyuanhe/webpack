const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack=require('webpack');
module.exports={
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    devtool:'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        hot: true,
        hotOnly: true
    },
    optimization: {
        usedExports: true
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
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
                    }]],
                   
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
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                        importLoaders:2
                    }
                },'sass-loader','postcss-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader','postcss-loader']
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
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),new CleanWebpackPlugin(),new webpack.HotModuleReplacementPlugin()]
}