import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import Root from '../shared/containers/Root';
import configStore from '../shared/store';
import routes from '../shared/routes';

const initialState = window.__INITIAL_STATE__;
const store = configStore(initialState);
render(
    <Root store={store} history={browserHistory} routes={routes} isServer={false}/>,
    document.getElementById('root')
);

module.hot && module.hot.accept();
