import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';

import {
    addNewRoom,
    closeAddNewRoomBlock,
    // eslint-disable-next-line no-unused-vars
    AddNewRoomPayload,
} from 'actions/application';

import AddNewRoomForm from 'components/AddNewRoomForm';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAddRoomClick: ({
        roomName,
    }: AddNewRoomPayload) => { dispatch(addNewRoom({roomName})); },
    onCloseAddNewRoomBlock: () => { dispatch(closeAddNewRoomBlock()); },
});

export default connect(null, mapDispatchToProps)(AddNewRoomForm);
