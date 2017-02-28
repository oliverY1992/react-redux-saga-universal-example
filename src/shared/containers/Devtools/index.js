import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogTools from 'redux-devtools-log-monitor';
import DockTools from 'redux-devtools-dock-monitor';

export default createDevTools(
    <DockTools toggleVisibilityKey="ctrl-b" changePositionKey="ctrl-m">
        <LogTools/>
    </DockTools>
)