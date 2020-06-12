import React from 'react';

import AddNewDeviceContainer from 'containers/AddNewDevice';
import DeviceInfoContainer from 'containers/DeviceInfoContainer';

import './styles.scss';

type Device = {
    id: string,
    deviceName: string,
    deviceRoom: string,
    icon: string,
}

type Props = {
    devices: Device[],
};

const DevicesBlock = ({devices = []}: Props) => {
    return (
        <div className='deviceBlock'>
            {
                // list of devices
                devices.map(device => (
                    <DeviceInfoContainer key={device.id} device={device} />
                ))
            }
            <AddNewDeviceContainer />
        </div>
    );
};

export default DevicesBlock;
