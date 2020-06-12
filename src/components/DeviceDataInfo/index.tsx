import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Device} from 'entities/device';

type Props = {
    device: Device,
};

const DeviceDataInfo = ({device}: Props) => {
    const {illumination, temperature, humidity} = device;
    // костыль icon === тип устройства
    switch (device.icon) {
    case 'illumination':
        return (
            <div>
                Освещенность: {illumination.slice(-1)[0]}
            </div>
        );
    case 'temperature':
        return (
            <div>
                Температура: {temperature.slice(-1)[0]}&deg;
            </div>
        );
    case 'humidity':
        return (
            <div>
                Влажность: {humidity.slice(-1)[0]}
            </div>
        );
    default:
        return (
            <div>
                Данных нет!
            </div>
        );
    }
};

export default DeviceDataInfo;
