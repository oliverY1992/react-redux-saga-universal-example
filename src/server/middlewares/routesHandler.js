import React from 'react';
import {match, createMemoryHistory} from 'react-router';
import {renderToString} from 'react-dom/server';
import Hydra from '../utils/Hydra';
import configStore from '../../shared/store';
import Root from '../../shared/containers/Root';
import routes from '../../shared/routes';

const _match = _refs => new Promise((resolve, reject) => {
    match(_refs, (error, redirectLocation, renderProps) => {
        if(error){
            reject(error);
        }else{
            resolve({redirectLocation, renderProps});
        }
    })
});

export default async (ctx, next) => {
    try{
        const props = await _match({routes, location : ctx.url});
        const {redirectLocation, renderProps} = props;
        if(redirectLocation){
            const {search, pathname} = redirectLocation;
            ctx.redirect(pathname + search);
        }else if(renderProps){
            const history = createMemoryHistory();
            const store = configStore();
            const assets = webpack_isomorphic_tools.assets();
            const rootContent = renderToString(
                <Root
                    history={history}
                    routes={routes}
                    renderProps={renderProps}
                    isServer={true}
                    store={store}
                />);
            const html = renderToString(
                <Hydra assets={assets} store={store} content={rootContent} />
            );
            ctx.body = `<!DOCTYPE html>\n${html}`;
        }else{
            ctx.status = 404;
            ctx.body = 'Not Found ! 404'
        }
    }catch(error){
        ctx.status = 500;
        ctx.body = error.message;
    }
}