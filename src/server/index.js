//compile server
var fs = require('fs');
var path = require('path');
var ROOT = path.resolve(__dirname, '../..');
var babelConfig = fs.readFileSync(path.resolve(ROOT, '.babelrc'));
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
try{
    babelConfig = JSON.parse(babelConfig);
}catch (err){
    console.log('failed to read .babelrc =>');
    console.log(err);
}
require('babel-polyfill');
require('babel-register')(babelConfig);

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__ISOMORPHIC__ = true;
global.webpack_isomorphic_tools = new WebpackIsomorphicTools(require('../../webpack/isomorphic.config'))
    .server(ROOT, () => {
        global.__DEVELOPMENT__ ? require('./server.dev') : require('./server.prod');
    });