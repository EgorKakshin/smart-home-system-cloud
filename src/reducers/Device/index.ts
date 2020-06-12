import {handleActions} from 'redux-actions';

import {
    ADD_DEVICE_BUTTON_CLICK,
    CLOSE_ADD_NEW_DEVICE_BLOCK,
    GET_USER_DEVICES_SUCCESS,
    // eslint-disable-next-line no-unused-vars
    GetUserDeviceSuccessPayload,
    ADD_NEW_DEVICE_SUCCESS,
} from 'actions/application';

type State = {
    deviceIds: Array<string>,
    devices: {
        [deviceId: string]: {
            id: string,
            name: string,
            type: string,
        },
    },
    addNewDevice: boolean,
};

const defaultState = {
    deviceIds: [],
    devices: {},
    addNewDevice: false,
};

export default handleActions({
    [ADD_DEVICE_BUTTON_CLICK]: (state: State) => ({
        ...state,
        addNewDevice: !state.addNewDevice,
    }),
    [CLOSE_ADD_NEW_DEVICE_BLOCK]: (state: State) => ({
        ...state,
        addNewDevice: !state.addNewDevice,
    }),
    [GET_USER_DEVICES_SUCCESS]: (state: State, {payload}: {payload: GetUserDeviceSuccessPayload}) => ({
        ...state,
        devices: payload.collection,
        deviceIds: payload.result,
    }),
    [ADD_NEW_DEVICE_SUCCESS]: (state: State) => ({
        ...state,
        addNewDevice: false,
    }),
}, defaultState);
