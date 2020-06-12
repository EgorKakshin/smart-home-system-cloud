import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import AddNewRoomFormContainer from 'containers/AddNewRoomForm';

import './styles.scss';

type Props = {
    addNewRoom: boolean,
    onAddRoomButtonClick: () => void,
};

type AddNewRoomButtonProps = {
    onAddRoomButtonClick: () => void,
};

const AddNewRoomButton = ({onAddRoomButtonClick}: AddNewRoomButtonProps) =>
    <div>
        <IconButton onClick={() => onAddRoomButtonClick()}>
            <AddCircle className='addRoomButton' />
        </IconButton>
        Добавить помещение
    </div>;

const AddNewRoom = ({addNewRoom, onAddRoomButtonClick}: Props) =>
    <div className='addNewRoom'>
        {addNewRoom
            ? <AddNewRoomFormContainer />
            : <AddNewRoomButton onAddRoomButtonClick={onAddRoomButtonClick} />
        }
    </div>;

export default AddNewRoom;
