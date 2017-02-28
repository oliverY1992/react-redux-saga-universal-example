var webpack = require('webpack');
var WebpackIsomorphicPlugin = require('webpack-isomorphic-tools/plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
var CONTEXT_PATH = path.resolve(__dirname, '..'),
    SRC_PATH = path.resolve(CONTEXT_PATH, 'src'),
    DIST_PATH = path.resolve(CONTEXT_PATH, 'static');
var isomorphicPlugin = new WebpackIsomorphicPlugin(require('./isomorphic.config'));

module.exports = {
    context: CONTEXT_PATH,
    entry:{
        main:[
            'webpack-hot-middleware/client?path=http://localhost:2333/__webpack_hmr',
            'babel-polyfill',
            './src/client'
        ],
        vendor:['react', 'react-dom', 'react-router']
    },
    output:{
        path:DIST_PATH,
        filename:'[name].bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[{
            test:/\.jsx?$/,
            exclude:[
                DIST_PATH,
                path.resolve(CONTEXT_PATH, 'node_modules'),
                path.resolve(SRC_PATH, 'server')
            ],
            include:[
                path.resolve(SRC_PATH, 'client'),
                path.resolve(SRC_PATH, 'shared')
            ],
            loader:'babel-loader'
        },{
            test:/\.scss$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader',
                options:{
                    modules:true,
                    importLoaders:2,
                    sourceMap:true,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
            },{
                loader:'postcss-loader',
                options:{
                    plugins:[precss, autoprefixer]
                }
            },{
                loader:'sass-loader',
                options:{
                    sourceMap:true,
                    outputStyle:'expanded'
                }
            }]
        },{
            test:isomorphicPlugin.regular_expression('images'),
            use:[{
                loader:'url-loader',
                options:{
                    limit:8192
                }
            }]
        }]
    },
    resolve:{
        modules:[
            path.resolve(CONTEXT_PATH, 'node_modules'),
            SRC_PATH
        ],
        extensions:['*','.js','.jsx','.css','.scss']
    },
    devtool:'inline-source-map',
    target:'web',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.DefinePlugin({
            __CLIENT__:true,
            __SERVER__:false,
            __DEVELOPMENT__:true,
            __DEVTOOLS__:true
        }),
        isomorphicPlugin.development()
    ]
}