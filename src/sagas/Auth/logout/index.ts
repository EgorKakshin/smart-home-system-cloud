import {takeEvery} from 'redux-saga/effects';

import {USER_LOGOUT} from 'actions/Auth';

export function* userLogoutSaga() {
    yield takeEvery(USER_LOGOUT, () => {
        localStorage.removeItem('jwt');
    });
}
