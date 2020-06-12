import {takeEvery, put, call} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

import {
    ADD_NEW_ROOM,
    // eslint-disable-next-line no-unused-vars
    AddNewRoomPayload,
    addNewRoomSuccess,
    addNewRoomFail,
} from 'actions/application';
import {AddNewRoomResource} from 'resources';

export function* addNewRoomSaga() {
    yield takeEvery(ADD_NEW_ROOM, addNewRoomSagaAsync);
}

function* addNewRoomSagaAsync({payload}: {payload: AddNewRoomPayload}) {
    try {
        const token = localStorage.getItem('jwt');
        if (token) {
            const result = yield call(() => AddNewRoomResource({
                token,
                roomName: payload.roomName,
            }));

            if (isEmpty(result.error)) {
                return yield put(addNewRoomSuccess());
            }
        }
    } catch (error) {
        yield put(addNewRoomFail());
    }
}
