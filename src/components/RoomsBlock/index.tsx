import React from 'react';

// eslint-disable-next-line no-unused-vars
import {Room} from 'entities/room';
import AddNewRoomContainer from 'containers/AddNewRoom';
import RoomInfoContainer from 'containers/RoomInfoContainer';

import './styles.scss';

type Params = {
    rooms: Array<Room>,
};

const RoomsBlock = ({rooms = []}: Params) => {
    return (
        <div className='roomsBlock'>
            {
                rooms.map(room => (
                    <RoomInfoContainer key={room.id} room={room} />
                ))
            }
            <AddNewRoomContainer />
        </div>
    );
};

export default RoomsBlock;
