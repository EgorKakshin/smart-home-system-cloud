import {handleActions} from 'redux-actions';

import {
    ADD_NEW_ROOM_BUTTON_CLICK,
    CLOSE_ADD_NEW_ROOM_BLOCK,
    GET_USER_ROOMS_SUCCESS,
    // eslint-disable-next-line no-unused-vars
    GetUserRoomsSuccessPayload,
    ADD_NEW_ROOM_SUCCESS,
} from 'actions/application';

type State = {
    roomIds: Array<string>,
    rooms: {
        [roomId: string]: {
            id: string,
            name: string,
            deviceCount: number,
        },
    }
    addNewRoom: boolean,
};

const defaultState = {
    roomIds: [],
    rooms: {},
    addNewRoom: false,
};

export default handleActions({
    [GET_USER_ROOMS_SUCCESS]: (state: State, {payload}: {payload: GetUserRoomsSuccessPayload}) => ({
        ...state,
        rooms: payload.collection,
        roomIds: payload.result,
    }),
    [ADD_NEW_ROOM_BUTTON_CLICK]: (state: State) => ({
        ...state,
        addNewRoom: !state.addNewRoom,
    }),
    [CLOSE_ADD_NEW_ROOM_BLOCK]: (state: State) => ({
        ...state,
        addNewRoom: !state.addNewRoom,
    }),
    [ADD_NEW_ROOM_SUCCESS]: (state: State) => ({
        ...state,
        addNewRoom: false,
    }),
}, defaultState);
