import Koa from 'koa';
import convert from 'koa-convert';
import devMiddleware from 'koa-webpack-dev-middleware';
import hotMiddleware from 'koa-webpack-hot-middleware';
import webpack from 'webpack';
import routesHandler from './middlewares/routesHandler';
import devConfig from '../../webpack/dev.config';
import appConfig from '../../src/shared/app.config';

const app = new Koa();
const compiler = webpack(devConfig);

//applyMiddlewares
app
    .use(convert(
        devMiddleware(compiler, {
            publicPath:devConfig.output.publicPath,
            noInfo:true
        })
    ))
    .use(convert(
        hotMiddleware(compiler)
    ))
    .use(routesHandler);

app.listen(appConfig.port, () => {
    const {host, port} = appConfig;
    console.log(`http://${host}:${port} is listening`);
});

