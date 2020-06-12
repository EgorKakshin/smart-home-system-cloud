import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import AddNewDeviceFormContainer from 'containers/AddNewDeviceForm';

import './styles.scss';

type Props = {
    addNewDevice: boolean,
    onAddDeviceButtonClick: () => void,
};

type AddNewDeviceButtonProps = {
    onAddDeviceButtonClick: () => void,
};

const AddNewDeviceButton = ({onAddDeviceButtonClick}: AddNewDeviceButtonProps) =>
    <div>
        <IconButton onClick={() => onAddDeviceButtonClick()}>
            <AddCircle className='addDeviceButton' />
        </IconButton>
        Добавить устройство
    </div>;

const AddNewDevice = ({addNewDevice, onAddDeviceButtonClick}: Props) =>
    <div className='addNewDevice'>
        {addNewDevice
            ? <AddNewDeviceFormContainer />
            : <AddNewDeviceButton onAddDeviceButtonClick={onAddDeviceButtonClick} />
        }
    </div>;

export default AddNewDevice;
