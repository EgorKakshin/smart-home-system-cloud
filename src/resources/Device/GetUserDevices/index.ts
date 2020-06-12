import {SERVER_ADDRESS} from 'constants/api';
const RESPONSE_URL = `${SERVER_ADDRESS}/getDeviceList`;

type Params = {
    token: string,
};

const getUserDevicesResource = ({token}: Params) =>
    fetch(RESPONSE_URL, {
        method: 'GET',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
    })
        .then(response => response.json())
        .catch(error => error);

export default getUserDevicesResource;
