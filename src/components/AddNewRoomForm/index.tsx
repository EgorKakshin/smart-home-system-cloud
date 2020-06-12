// eslint-disable-next-line no-unused-vars
import React, {useState, SyntheticEvent} from 'react';

import {StylesProvider} from '@material-ui/core/styles';
import TextFields from '@material-ui/core/TextField';
// eslint-disable-next-line no-unused-vars
import {AddNewRoomPayload} from 'actions/application';
import Button from '@material-ui/core/Button';
import './styles.scss';

type Props = {
    onCloseAddNewRoomBlock: () => void,
    onAddRoomClick: ({roomName}: AddNewRoomPayload) => void,
};

const AddNewRoomForm = ({
    onAddRoomClick,
    onCloseAddNewRoomBlock,
}: Props) => {
    const [roomName, setRoomName] = useState('');

    const onHandleFormSubmitClick = (event: SyntheticEvent) => {
        event.preventDefault();
        return onAddRoomClick({roomName});
    };

    return (
        <form 
            className='addNewRoomForm'
            onSubmit={onHandleFormSubmitClick}
            onReset={onCloseAddNewRoomBlock}
        >
            <div className='addNewRoomFields'>
                <StylesProvider injectFirst>
                    <TextFields
                        id='roomName'
                        label='Название комнаты'
                        type='text'
                        fullWidth={true}
                        className='roomNameField'
                        onChange={e => setRoomName(e.target.value)}
                        error={false}
                        helperText={''}
                    />
                </StylesProvider>
                <div className='addNewRoomButtonsBlock'>
                    <StylesProvider injectFirst>
                        <Button
                            type='submit'
                            className='addNewRoomButton'
                            size='medium'
                            variant='contained'
                        >
                            Добавить
                        </Button>
                    </StylesProvider>
                    <StylesProvider injectFirst>
                        <Button
                            type='reset'
                            className='cancelAddNewRoomButton'
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

export default AddNewRoomForm;
