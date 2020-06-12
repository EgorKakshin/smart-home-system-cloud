// eslint-disable-next-line no-unused-vars
import {Collections as AppCollection} from 'entities/app';
// eslint-disable-next-line no-unused-vars
import {DeviceCollection} from 'entities/device';
// eslint-disable-next-line no-unused-vars
import {RoomCollection} from 'entities/room';
// eslint-disable-next-line no-unused-vars
import {Collection as UserCollection} from 'entities/user';

export type State = {
    app: AppCollection,
    device: DeviceCollection,
    room: RoomCollection,
    user: UserCollection,
};
