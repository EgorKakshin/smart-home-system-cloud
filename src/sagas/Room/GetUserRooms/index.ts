import {takeEvery, put, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import {
    GET_USER_ROOMS,
    ADD_NEW_ROOM_SUCCESS,
    ADD_NEW_DEVICE_SUCCESS,
    getUserRoomsSuccess,
    getUserRoomsFail,
} from 'actions/application';
import {GetUserRoomsResource} from 'resources';

export function* getUserRoomsSaga() {
    yield takeEvery([GET_USER_ROOMS, ADD_NEW_ROOM_SUCCESS, ADD_NEW_DEVICE_SUCCESS], getUserRoomsSagaAsync);
}

function* getUserRoomsSagaAsync() {
    try {
        const token = localStorage.getItem('jwt');
        if (token) {
            const result = yield call(() => GetUserRoomsResource({
                token,
            }));

            if (isEmpty(result.error)) {
                return yield put(getUserRoomsSuccess(result));
            }
        }
    } catch (error) {
        yield put(getUserRoomsFail());
    }
}
