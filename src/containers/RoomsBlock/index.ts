import {connect} from 'react-redux';

// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import {selectRoomsByIds, selectRoomCollection} from 'entities/room/selectors';
import {getRoomIds} from 'entities/room/getters';
import RoomsBlock from 'components/RoomsBlock';

const mapStateToProps = (state: State) => {
    const roomCollection = selectRoomCollection(state);
    const roomIds = getRoomIds(roomCollection);
    const rooms = roomIds && selectRoomsByIds(roomCollection, roomIds);

    return {
        rooms,
    };
};

export default connect(mapStateToProps)(RoomsBlock);
