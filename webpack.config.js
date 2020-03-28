const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        main:'./src/index.js',
        page:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath: "http://cdn.example.com/assets/"
    },
    module:{
        rules:[
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
    }),new CleanWebpackPlugin()]
}