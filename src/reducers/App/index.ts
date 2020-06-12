import {handleActions} from 'redux-actions';

import {
    OPEN_DEVICE_CONTROLLER,
    // eslint-disable-next-line no-unused-vars
    OpenDeviceControllerPayload,
    CLOSE_DEVICE_CONTROLLER,
} from 'actions/application';
// eslint-disable-next-line no-unused-vars
import {Collections} from 'entities/app';

const defaultState = {
    deviceId: null,
    isControl: false,
};

type State = Collections;

export default handleActions({
    [OPEN_DEVICE_CONTROLLER]: (state: State, {payload}: {payload: OpenDeviceControllerPayload}) => ({
        ...state,
        deviceId: payload.deviceId,
        isControl: true,
    }),
    [CLOSE_DEVICE_CONTROLLER]: (state: State) => ({
        ...state,
        deviceId: null,
        isControl: false,
    }),
}, defaultState);
