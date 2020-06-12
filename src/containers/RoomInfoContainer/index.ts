import {connect} from 'react-redux';

import RoomInfo from 'components/RoomInfo';
// eslint-disable-next-line no-unused-vars
import {RoomCollection, Room} from 'entities/room';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';

type Props = {
    room: Room,
};

const mapStateToProps = (state: State, props: Props) => ({
    state,
    props,
});

export default connect(mapStateToProps)(RoomInfo);
