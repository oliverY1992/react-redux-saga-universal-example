var WebpackIsomorphicPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
    assets:{
        images:{
            extensions:[
                'jpg',
                'jpeg',
                'png',
                'gif'
            ],
            parser:WebpackIsomorphicPlugin.url_loader_parser
        },
        style_modules:{
            extensions:['scss'],
            filter:function (module, reg, options, log) {
                if(options.development){
                    return WebpackIsomorphicPlugin.style_loader_filter(module, reg, options, log)
                }
                return reg.test(module.name);
            },
            path:function (module, options, log) {
                if(options.development){
                    return WebpackIsomorphicPlugin.style_loader_path_extractor(module, options, log);
                }
                return module.name;
            },
            parser:function (module, options, log) {
                if(options.development){
                    return WebpackIsomorphicPlugin.css_modules_loader_parser(module,options,log);
                }
                return module.source;
            }
        }
    }
}