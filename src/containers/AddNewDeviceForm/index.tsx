import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {Dispatch} from 'redux';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import {selectRoomCollection, selectRoomNames} from 'entities/room/selectors';
import {getRoomIds} from 'entities/room/getters';

import {
    addNewDevice,
    closeAddNewDeviceBlock,
    // eslint-disable-next-line no-unused-vars
    AddNewDevicePayload,
} from 'actions/application';

import AddNewDeviceForm from 'components/AddNewDeviceForm';

const mapStateToProps = (state: State) => {
    const roomCollection = selectRoomCollection(state);
    const roomIds = getRoomIds(roomCollection);

    return {
        roomNamesList: selectRoomNames(roomCollection, roomIds),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAddDeviceClick: ({
        deviceName,
        roomName,
        icon,
    }: AddNewDevicePayload) => { dispatch(addNewDevice({deviceName, roomName, icon})); },
    onCloseAddNewDeviceBlock: () => { dispatch(closeAddNewDeviceBlock()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeviceForm);
