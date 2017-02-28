import {createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

export default initialState => {
    if(!initialState){
        initialState = {};
    }
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        compose(sagaMiddleware)
    );

    if(module.hot){
        module.hot.accept('../reducers', () => {
            const newReducer = require('../reducers').default;
            store.replaceReducer(newReducer);
        })
    }

    return store;
}