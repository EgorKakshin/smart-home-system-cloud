import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {Dispatch} from 'redux';
import {getUserDevices, getUserRooms} from 'actions/application';
import Application from 'components/Application';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import {getControlDeviceId, getControlStatus} from 'entities/app/getters';
import {selectAppState} from 'entities/app/selectors';

const mapStateToProps = (state: State) => ({
    deviceId: getControlDeviceId(selectAppState(state)),
    isControl: getControlStatus(selectAppState(state)),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUserDevices: () => { dispatch(getUserDevices()); },
    getUserRooms: () => { dispatch(getUserRooms()); }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Application);
