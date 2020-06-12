import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from 'reducers';

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
    // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducers, compose(applyMiddleware(sagaMiddleware), enhancer)),
        runSaga: sagaMiddleware.run
    };
}
