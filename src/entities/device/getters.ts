// eslint-disable-next-line no-unused-vars
import {Device, DeviceId, DeviceType} from '.';

export const getDeviceId = (device: Device): DeviceId => device.id;

export const getDeviceType = (device: Device): DeviceType => device.type;
