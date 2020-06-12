import {all} from 'redux-saga/effects';

import {
    checkUserAuthSaga,
    signInSaga,
    userLogoutSaga,
    registerSaga,
} from 'sagas/Auth';
import {
    addNewDeviceSaga,
    getUserDevicesSage,
} from 'sagas/Device';
import {
    addNewRoomSaga,
    getUserRoomsSaga,
} from 'sagas/Room';

export default function* rootSaga() {
    yield all([
        checkUserAuthSaga(),
        signInSaga(),
        userLogoutSaga(),
        registerSaga(),
        // device
        addNewDeviceSaga(),
        getUserDevicesSage(),
        // room
        addNewRoomSaga(),
        getUserRoomsSaga(),
    ]);
}
