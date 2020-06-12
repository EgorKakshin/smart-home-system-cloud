import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {Dispatch} from 'redux';

import DeviceInfo from 'components/DeviceInfo';
// eslint-disable-next-line no-unused-vars
import {Device, DeviceId} from 'entities/device';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import {
    openDeviceController,
    // eslint-disable-next-line no-unused-vars
    OpenDeviceControllerPayload,
} from 'actions/application';

type Props = {
    device: Device,
};

const mapStateToProps = (state: State, props: Props) => ({
    state,
    props,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    openDeviceController: ({deviceId}: OpenDeviceControllerPayload) => { dispatch(openDeviceController({deviceId})); }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);
