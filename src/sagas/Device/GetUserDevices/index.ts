import {takeEvery, put, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import {
    GET_USER_DEVICES,
    ADD_NEW_DEVICE_SUCCESS,
    getUserDevicesSuccess,
    getUserDevicesFail,
} from 'actions/application';
import {getUserDevicesResource} from 'resources';

export function* getUserDevicesSage() {
    yield takeEvery([GET_USER_DEVICES, ADD_NEW_DEVICE_SUCCESS], getUserDevicesSagaAsync);
}

function* getUserDevicesSagaAsync() {
    try {
        const token = localStorage.getItem('jwt');
        if (token) {
            const result = yield call(() => getUserDevicesResource({
                token,
            }));

            if (isEmpty(result.error)) {
                return yield put(getUserDevicesSuccess(result));
            }
        }
    } catch (error) {
        yield put(getUserDevicesFail());
    }
}
