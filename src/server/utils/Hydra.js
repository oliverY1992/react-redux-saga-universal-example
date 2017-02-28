import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import appConfig from '../../shared/app.config';

class Hydra extends Component{
    static propTypes = {
        assets:PropTypes.object.isRequired,
        content:PropTypes.string,
        store:PropTypes.object
    };
    render(){
        const {assets, content, store} = this.props;
        const _content = content ? content : '';
        const _store = store || {getState : () => ({})};
        const head = Helmet.rewind();
        return (
            <html>
                <head>
                    {head.base.toComponent()}
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {head.script.toComponent()}
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    {
                        Object.keys(assets.styles).map((style, index) => (
                            <link href={assets.styles[style]} key={index} rel="stylesheet" charSet="utf-8"/>
                        ))
                    }
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{__html:_content}}></div>
                    <script dangerouslySetInnerHTML={{__html:`window.__INITIAL_STATE__ = ${JSON.stringify(_store.getState())}`}}></script>
                    <script src={assets.javascript.vendor}></script>
                    <script src={assets.javascript.main}></script>
                </body>
            </html>
        )
    }
}

export default Hydra;