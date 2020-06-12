import React from 'react';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line no-unused-vars
import type {Device} from 'entities/device';
import DeviceIcon from 'components/DeviceIcon';
// eslint-disable-next-line no-unused-vars
import {OpenDeviceControllerPayload} from 'actions/application';

import './styles.scss';

type Props = {
    device: Device,
    openDeviceController: ({deviceId}: OpenDeviceControllerPayload) => void,
};

const DeviceInfo = ({device, openDeviceController}: Props) =>
    <div className='device-info'>
        <div className='device-icon'>
            <DeviceIcon icon={device.icon} />
        </div>
        <div className='device-info-block'>
            <div className='device-name'>
                {device.deviceName}
            </div>
            <Button
                size='small'
                className='device-control-button'
                onClick={() => openDeviceController({deviceId: device.id})}
            >
                Управление
            </Button>
        </div>
    </div>;

export default DeviceInfo;
