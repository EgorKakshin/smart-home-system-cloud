import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore  from 'store';
import rootSaga from 'sagas';

import AppContainer from 'containers/App';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
