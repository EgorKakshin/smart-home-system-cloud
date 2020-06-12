import React from 'react';

// eslint-disable-next-line no-unused-vars
import type {Room} from 'entities/room';
import PlaceholderIcon from 'uikit/icons/roomIcons/placeholder.svg';

import './styles.scss';

type Props = {
    room: Room,
};

const DeviceInfo = ({room}: Props) =>
    <div className='room-info'>
        <div className='room-icon'>
            <PlaceholderIcon fill='red' />
        </div>
        <div className='room-info-block'>
            <div className='room-name'>
                {room.name}
            </div>
            <div className='room-name'>
                {`Количество устройтв: ${room.deviceCount}`}
            </div>
        </div>
    </div>;

export default DeviceInfo;
