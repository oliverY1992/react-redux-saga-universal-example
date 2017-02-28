import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, RouterContext} from 'react-router';

const Root = props => {
    const {store, isServer, routes, history, renderProps} = props;
    return (
        <Provider store={store}>
            <div>
                {isServer ?
                    <RouterContext {...renderProps}/> :
                    <Router history={history} routes={routes} />
                }
            </div>
        </Provider>
    )
};
Root.propTypes = {
    store:PropTypes.object.isRequired,
    history:PropTypes.object.isRequired,
    routes:PropTypes.node.isRequired,
    isServer:PropTypes.bool,
    renderProps:PropTypes.object

};

export default Root;