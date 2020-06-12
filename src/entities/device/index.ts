export type DeviceId = string;

export type DeviceType = 'READ_ONLY' | 'WRITE_ONCE' | 'WRITE';

export type Device = {
    id: DeviceId,
    deviceName: string,
    deviceRoom: string,
    icon: 'humidity' | 'temperature' | 'illumination',
    illumination: [string],
    temperature: [string],
    humidity: [string],
    dataTimeStamp: [string]
};

export type DeviceCollection = {
    deviceIds: [string],
    devices: {
        [deviceId: string]: Device,
    },
    addNewDevice: boolean,
};
