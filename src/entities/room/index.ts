export type RoomId = string;

export type RoomName = string;

export type Room = {
    id: RoomId,
    name: RoomName,
    deviceCount: number,
};

export type RoomCollection = {
    roomIds: [string],
    rooms: {
        [roomId: string]: Room,
    },
    addNewRoom: boolean,
};
