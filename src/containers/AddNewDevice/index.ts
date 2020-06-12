// eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';
import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import AddNewDevice from 'components/AddNewDevice';
import {addDeviceButtonClick} from 'actions/application';

const getAddNewDeviceStatus = (state: State) => state.device.addNewDevice;

const mapStateToProps = (state: State) => ({
    addNewDevice: getAddNewDeviceStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAddDeviceButtonClick: () => { dispatch(addDeviceButtonClick()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDevice);
