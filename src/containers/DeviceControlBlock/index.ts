import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {Dispatch} from 'redux';

// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
// eslint-disable-next-line no-unused-vars
import {DeviceId} from 'entities/device';
import {getUserDevices, closeDeviceController} from 'actions/application';
import {selectDeviceCollection, selectDeviceById} from 'entities/device/selectors';
import DeviceControlBlock from 'components/DeviceControlBlock';

type Props = {
    deviceId: DeviceId,
};

const mapStateToProps = (state: State, {deviceId}: Props) => {
    const deviceCollection = selectDeviceCollection(state);

    return {
        device: selectDeviceById(deviceCollection, deviceId),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUserDevices: () => { dispatch(getUserDevices()); },
    closeDeviceController: () => { dispatch(closeDeviceController()); },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeviceControlBlock);
