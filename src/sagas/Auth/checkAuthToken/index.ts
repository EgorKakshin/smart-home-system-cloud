import {takeEvery, put, call} from 'redux-saga/effects';

import {
    CHECK_USER_AUTH,
    checkUserAuthSuccess,    
    checkUserAuthFail,
} from 'actions/Auth';
import {checkUserAuthResource} from 'resources';

export function* checkUserAuthSaga() {
    yield takeEvery(CHECK_USER_AUTH, checkUserAuthSagaAsync);
}

function* checkUserAuthSagaAsync() {
    try {
        const token = localStorage.getItem('jwt');
        if (token) {
            const result = yield call(() => checkUserAuthResource({token}));
            if (result.token) {
                // сервер удачно провалидировал токен
                localStorage.setItem('jwt', result.token);
                return yield put(checkUserAuthSuccess(result));
            }
            // сервер провалидировал токен и он истек или неправильный
            localStorage.removeItem('jwt');
            return yield put(checkUserAuthSuccess({isAuth: false}));
        }
        // если нет токена, пользователь не авторизован
        return yield put(checkUserAuthSuccess({isAuth: false}));
    } catch (error) {
        yield put(checkUserAuthFail());
    }
}
