import {Route, IndexRoute} from 'react-router';
import React from 'react';
import Navigator from '../components/Navigator';
import Tabs from '../components/Tabs';

const App = () => (
    <Tabs items={[{
        title:'title1',
        content:'content1'
    },{
        title:'title2',
        content:'content2'
    }]}/>
);
export default (
    <Route path="/">
        <IndexRoute component={App}/>
    </Route>
)