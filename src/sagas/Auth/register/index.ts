import {takeEvery, put, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import {
    REGISTER_BUTTON_CLICK,
    registrationSuccess,
    registrationFail,
    // eslint-disable-next-line no-unused-vars
    RegisterButtonClickPayload,
} from 'actions/Auth';

import {signUp} from 'resources';

export function* registerSaga() {
    yield takeEvery(REGISTER_BUTTON_CLICK, registerSagaSync);
}

function* registerSagaSync({payload}: {payload: RegisterButtonClickPayload}) {
    try {
        const result = yield call(() => signUp({
            username: payload.username,
            password: payload.password,
        }));

        if (isEmpty(result.error)) {
            localStorage.setItem('jwt', result.token);
            return yield put(registrationSuccess({
                isAuth: result.isAuth,
                username: result.username,
            }));
        }
        return yield put(registrationFail({error: result.error}));
    } catch (error) {
        return yield put(registrationFail({error}));
    }
}
