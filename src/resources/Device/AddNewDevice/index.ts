import {SERVER_ADDRESS} from 'constants/api';
const RESPONSE_URL = `${SERVER_ADDRESS}/addNewDevice`;

type Params = {
    deviceName: string,
    roomName: string,
    token: string,
    icon: string,
};

const addNewDeviceResource = ({deviceName, roomName, token, icon}: Params) =>
    fetch(RESPONSE_URL, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
        body: JSON.stringify({
            deviceName,
            deviceRoom: roomName,
            icon,
        }),
    })
        .then(response => response.json())
        .catch(error => error);

export default addNewDeviceResource;
