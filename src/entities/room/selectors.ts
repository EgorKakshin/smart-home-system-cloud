// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
// eslint-disable-next-line no-unused-vars
import {RoomCollection, Room} from '.';
import {getRoomName} from './getters';

export const selectRoomCollection = (state: State) => state.room;

export const selectRooms = (state: RoomCollection) => state.rooms;

export const selectRoomById = (state: RoomCollection, roomId: string): Room =>
    selectRooms(state)[roomId];

export const selectRoomsByIds = (state: RoomCollection, roomIds: Array<string>): Array<Room> =>
    roomIds.map(roomId => selectRoomById(state, roomId));

export const selectRoomNames = (state: RoomCollection, roomIds: Array<string>): Array<string> =>
    roomIds.map(roomId => getRoomName(selectRoomById(state, roomId)));
