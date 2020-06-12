// eslint-disable-next-line no-unused-vars
import {DeviceCollection, Device} from '.';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';

export const selectDevices = (state: DeviceCollection) => state.devices;

export const selectDeviceById = (state: DeviceCollection, deviceId: string): Device =>
    selectDevices(state)[deviceId];

export const selectDevicesByIds = (state: DeviceCollection, deviceIds: Array<string> ): Array<Device> =>
    deviceIds.map(deviceId => selectDeviceById(state, deviceId));

export const selectDeviceCollection = (state: State) => state.device;
