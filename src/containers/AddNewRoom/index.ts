// eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';
import {connect} from 'react-redux';

import AddNewRoom from 'components/AddNewRoom';
import {addNewRoomButtonClick} from 'actions/application';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import {getAddNewRoomStatus} from 'entities/room/getters';
import {selectRoomCollection} from 'entities/room/selectors';

const mapStateToProps = (state: State) => {
    const roomCollections = selectRoomCollection(state);
    return {
        addNewRoom: getAddNewRoomStatus(roomCollections),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAddRoomButtonClick: () => { dispatch(addNewRoomButtonClick()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRoom);
