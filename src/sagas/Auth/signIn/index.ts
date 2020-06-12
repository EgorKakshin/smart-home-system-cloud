import {takeEvery, put, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import {
    AUTH_BUTTON_CLICK,
    // eslint-disable-next-line no-unused-vars
    AuthButtonClickPayload,
    signInSuccess,
    signInFail,
} from 'actions/Auth';
import {SignIn} from 'resources';

export function* signInSaga() {
    yield takeEvery(AUTH_BUTTON_CLICK, signInSagaSync);
}

function* signInSagaSync({payload}: {payload: AuthButtonClickPayload}) {
    try {
        const result = yield call(() => SignIn({
            username: payload.username,
            password: payload.password,
        }));

        if (isEmpty(result.error)) {
            localStorage.setItem('jwt', result.token);
            return yield put(signInSuccess({
                isAuth: result.isAuth,
                username: result.username,
            }));
        }

        return yield put(signInFail({error: result.error}));
    } catch (error) {
        yield put(signInFail({error: error}));
    }
}
