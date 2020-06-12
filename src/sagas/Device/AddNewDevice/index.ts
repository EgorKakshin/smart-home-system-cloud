import {takeEvery, put, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import {
    ADD_NEW_DEVICE,
    // eslint-disable-next-line no-unused-vars
    AddNewDevicePayload,
    addNewDeviceSuccess,
    addNewDeviceFail,
} from 'actions/application';
import {addNewDeviceResource} from 'resources';

export function* addNewDeviceSaga() {
    yield takeEvery(ADD_NEW_DEVICE, addNewDeviceSagaAsync);
}

function* addNewDeviceSagaAsync({payload}: {payload: AddNewDevicePayload}) {
    try {
        const token = localStorage.getItem('jwt');
        if (token) {
            const result = yield call(() => addNewDeviceResource({
                token,
                deviceName: payload.deviceName,
                roomName: payload.roomName,
                icon: payload.icon,
            }));

            if (isEmpty(result.error)) {
                return yield put(addNewDeviceSuccess({
                    device: {
                        id: result.id,
                        deviceName: result.deviceName,
                        deviceRoom: result.deviceRoom,
                    },
                }));
            }
        }
    } catch (error) {
        yield put(addNewDeviceFail());
    }
}
