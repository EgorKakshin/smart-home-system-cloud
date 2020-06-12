// eslint-disable-next-line no-unused-vars
import React, {useState, SyntheticEvent} from 'react';

import {StylesProvider} from '@material-ui/core/styles';
import TextFields from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
// eslint-disable-next-line no-unused-vars
import {AddNewDevicePayload} from 'actions/application';
import Button from '@material-ui/core/Button';
import './styles.scss';

type Props = {
    roomNamesList: Array<string>,
    onCloseAddNewDeviceBlock: () => void,
    onAddDeviceClick: ({deviceName, roomName, icon}: AddNewDevicePayload) => void,
};

const AddNewDeviceForm = ({
    roomNamesList = [],
    onAddDeviceClick,
    onCloseAddNewDeviceBlock,
}: Props) => {
    const [deviceName, setDeviceName] = useState('');
    const [roomName, setRoomName] = useState(roomNamesList[0]);
    const [icon, setIcon] = useState('illumination');

    const onHandleFormSubmitClick = (event: SyntheticEvent) => {
        event.preventDefault();
        return onAddDeviceClick({deviceName, roomName, icon});
    };

    return (
        <form 
            className='addNewDeviceForm'
            onSubmit={onHandleFormSubmitClick}
            onReset={onCloseAddNewDeviceBlock}
        >
            <div className='addNewDeviceIcon'>
                <NativeSelect
                    value={icon}
                    onChange={e => setIcon(e.target.value)}
                    className='deviceIconFiled'
                >
                    <option value='illumination'>Освещенность</option>
                    <option value='temperature'>Температура</option>
                    <option value='humidity'>Влажность</option>
                </NativeSelect>
            </div>
            <div className='addNewDeviceFields'>
                <StylesProvider injectFirst>
                    <TextFields
                        id='deviceName'
                        label='Наименование устройства'
                        type='text'
                        fullWidth={true}
                        className='deviceNameField'
                        onChange={e => setDeviceName(e.target.value)}
                        error={false}
                        helperText={''}
                        inputProps={{maxLength: 15}}
                    />
                </StylesProvider>
                <StylesProvider injectFirst>
                    <NativeSelect
                        value={roomName}
                        onChange={e => setRoomName(e.target.value)}
                        className='deviceRoomField'
                    >
                        {roomNamesList.map(roomName =>
                            <option key={roomName} value={roomName}>{roomName}</option>
                        )}
                    </NativeSelect>
                </StylesProvider>
                <div className='addNewDeviceButtonsBlock'>
                    <StylesProvider injectFirst>
                        <Button
                            type='submit'
                            className='addNewDeviceButton'
                            size='medium'
                            variant='contained'
                        >
                            Добавить
                        </Button>
                    </StylesProvider>
                    <StylesProvider injectFirst>
                        <Button
                            type='reset'
                            className='cancelAddNewDeviceButton'
                            size='medium'
                            variant='contained'
                        >
                            Отмена
                        </Button>
                    </StylesProvider>
                </div>
            </div>
        </form>
    );
};

export default AddNewDeviceForm;
