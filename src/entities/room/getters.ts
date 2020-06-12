// eslint-disable-next-line no-unused-vars
import {Room, RoomId, RoomName, RoomCollection} from '.';

export const getRoomIds = (state: RoomCollection) => state.roomIds;

export const getRoomId = (room: Room): RoomId => room.id;

export const getRoomName = (room: Room): RoomName => room.name;

export const getAddNewRoomStatus = (state: RoomCollection) => state.addNewRoom;
