import {SERVER_ADDRESS} from 'constants/api';
const RESPONSE_URL = `${SERVER_ADDRESS}/addNewRoom`;

type Params = {
    roomName: string,
    token: string,
};

const addNewRoomResource = ({roomName, token}: Params) =>
    fetch(RESPONSE_URL, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
        body: JSON.stringify({
            roomName,
        }),
    })
        .then(response => response.json())
        .catch(error => error);

export default addNewRoomResource;
