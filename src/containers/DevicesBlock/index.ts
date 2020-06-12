import {connect} from 'react-redux';

// eslint-disable-next-line no-unused-vars
import {DeviceCollection} from 'entities/device';
import {selectDevicesByIds, selectDeviceCollection} from 'entities/device/selectors';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
// eslint-disable-next-line no-unused-vars
import DevicesBlock from 'components/DevicesBlock';

const mapStateToProps = (state: State) => {
    const deviceCollection = selectDeviceCollection(state);
    const devices = state.device.deviceIds && selectDevicesByIds(deviceCollection, state.device.deviceIds);
    return {
        devices,
    };
};

export default connect(mapStateToProps)(DevicesBlock);
