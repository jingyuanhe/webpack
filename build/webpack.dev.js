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
        hotOnly: true,
        overlay: true,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
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
                        "corejs": "3",
                        "modules": false 
                    }],'@babel/react'],
                    
                    }
                },{
                    loader:'eslint-loader',
                    options:{
                        fix:true,
                        formatter: require('eslint-friendly-formatter')
                    }
                }]
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
    plugins:[new webpack.HotModuleReplacementPlugin()]
}
module.exports=merge(baseConfig,devConfig)