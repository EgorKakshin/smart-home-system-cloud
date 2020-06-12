import React, {useEffect} from 'react';

import DevicesBlockContainer from 'containers/DevicesBlock';
import RoomsBlockContainer from 'containers/RoomsBlock';
import DeviceControlBlockContainer from 'containers/DeviceControlBlock';
// eslint-disable-next-line no-unused-vars
import {DeviceId} from 'entities/device';

import './styles.scss';

type Props = {
    getUserDevices: () => void,
    getUserRooms: () => void,
    deviceId: DeviceId | null,
    isControl: boolean,
};

const Application = ({
    deviceId,
    isControl,
    getUserDevices,
    getUserRooms
}: Props) => {
    useEffect(() => {
        getUserDevices();
        getUserRooms();
    }, []);

    if (isControl && deviceId) {
        return (
            <div className='content'>
                <DeviceControlBlockContainer deviceId={deviceId} />
            </div>
        );
    }

    return (
        <div className='content'>
            <DevicesBlockContainer />
            <RoomsBlockContainer />
        </div>
    );
};

export default Application;
