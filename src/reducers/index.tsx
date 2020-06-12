import {combineReducers} from 'redux';

import AuthReducer from './Auth';
import DeviceReducer from './Device';
import RoomReducer from './Room';
import AppReducer from './App';

export default combineReducers({
    user: AuthReducer,
    device: DeviceReducer,
    room: RoomReducer,
    app: AppReducer,
});
