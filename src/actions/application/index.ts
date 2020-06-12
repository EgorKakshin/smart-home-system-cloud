import {createActions} from 'redux-actions';

// eslint-disable-next-line no-unused-vars
import type {DeviceId} from 'entities/device';

export const ADD_DEVICE_BUTTON_CLICK = '#ADD_DEVICE_BUTTON_CLICK';

export const ADD_NEW_DEVICE = '#ADD_NEW_DEVICE';
export const ADD_NEW_DEVICE_SUCCESS = '#ADD_NEW_DEVICE_SUCCESS';
export const ADD_NEW_DEVICE_FAIL = '#ADD_NEW_DEVICE_FAIL';
export const CLOSE_ADD_NEW_DEVICE_BLOCK = '#CLOSE_ADD_NEW_DEVICE_BLOCK';

export const GET_USER_DEVICES = '#GET_USER_DEVICES';
export const GET_USER_DEVICES_SUCCESS = '#GET_USER_DEVICES_SUCCESS';
export const GET_USER_DEVICES_FAIL = '#GET_USER_DEVICES_FAIL';

// room
export const GET_USER_ROOMS = '#GET_USER_ROOMS';
export const GET_USER_ROOMS_SUCCESS = '#GET_USER_ROOMS_SUCCESS';
export const GET_USER_ROOMS_FAIL = '#GET_USER_ROOMS_FAIL';

export const ADD_NEW_ROOM_BUTTON_CLICK = '#ADD_NEW_ROOM_BUTTON_CLICK';
export const CLOSE_ADD_NEW_ROOM_BLOCK = '#CLOSE_ADD_NEW_ROOM_BLOCK';
export const ADD_NEW_ROOM = '#ADD_NEW_ROOM';
export const ADD_NEW_ROOM_SUCCESS = '#ADD_NEW_ROOM_SUCCESS';
export const ADD_NEW_ROOM_FAIL = 'ADD_NEW_ROOM_FAIL';

// app
export const OPEN_DEVICE_CONTROLLER = '#OPEN_DEVICE_CONTROLLER';
export const CLOSE_DEVICE_CONTROLLER = '#CLOSE_DEVICE_CONTROLLER';

export type AddNewDevicePayload = {
    deviceName: string,
    roomName: string,
    icon: string,
};

export type AddNewDeviceSuccessPayload = {
    id: string,
    deviceName: string,
    deviceRoom: string,
};

export type GetUserDeviceSuccessPayload = {
    result: Array<string>,
    collection: {
        [deviceId: string]: {
            id: string,
            deviceName: string,
            deviceRoom: string,
        },
    },
};

export type GetUserRoomsSuccessPayload = {
    result: Array<string>,
    collection: {
        [roomId: string]: {
            id: string,
            name: string,
            deviceCount: number,
        },
    },
}

export type AddNewRoomPayload = {
    roomName: string,
};

// app
export type OpenDeviceControllerPayload = {
    deviceId: DeviceId,
};

export const {
    addDeviceButtonClick,
    addNewDevice,
    addNewDeviceSuccess,
    addNewDeviceFail,
    closeAddNewDeviceBlock,
    getUserDevices,
    getUserDevicesSuccess,
    getUserDevicesFail,

    getUserRooms,
    getUserRoomsSuccess,
    getUserRoomsFail,

    addNewRoomButtonClick,
    closeAddNewRoomBlock,
    addNewRoom,
    addNewRoomSuccess,
    addNewRoomFail,

    //app
    openDeviceController,
    closeDeviceController,
} = createActions({
    // переключение на экран добавления нового устройства
    [ADD_DEVICE_BUTTON_CLICK]: () => null,
    // добавление нового устройства
    [ADD_NEW_DEVICE]: ({deviceName, roomName = 'default', icon='tv'}: AddNewDevicePayload) => ({
        deviceName,
        roomName,
        icon,
    }),
    [ADD_NEW_DEVICE_SUCCESS]: ({id = '1', deviceName, deviceRoom}: AddNewDeviceSuccessPayload) => ({
        id,
        deviceName,
        deviceRoom,
    }),
    //Выход из блока добавления нового устройства
    [CLOSE_ADD_NEW_DEVICE_BLOCK]: () => null,

    // Список устройств пользователя
    [GET_USER_DEVICES]: () => null,
    [GET_USER_DEVICES_SUCCESS]: (deviceCollection: GetUserDeviceSuccessPayload) => deviceCollection,
    [GET_USER_DEVICES_FAIL]: () => null,

    // Список помещений пользователя
    [GET_USER_ROOMS]: () => null,
    [GET_USER_ROOMS_SUCCESS]: (roomCollection: GetUserRoomsSuccessPayload) => roomCollection,
    [GET_USER_ROOMS_FAIL]: () => null,

    [ADD_NEW_ROOM_BUTTON_CLICK]: () => null,
    [CLOSE_ADD_NEW_ROOM_BLOCK]: () => null,
    [ADD_NEW_ROOM]: ({roomName}: AddNewRoomPayload) => ({roomName}),
    [ADD_NEW_ROOM_SUCCESS]: () => null,
    [ADD_NEW_ROOM_FAIL]: () => null,

    // app
    [OPEN_DEVICE_CONTROLLER]: ({deviceId}: OpenDeviceControllerPayload) => ({deviceId}),
    [CLOSE_DEVICE_CONTROLLER]: () => null,
});
