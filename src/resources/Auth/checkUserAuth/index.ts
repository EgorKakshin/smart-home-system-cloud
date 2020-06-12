import {SERVER_ADDRESS} from 'constants/api';
const RESPONSE_URL = `${SERVER_ADDRESS}/checkAuth`;

type Params = {
    token: string,
};

const checkUserAuthResource = ({token}: Params) =>
    fetch(RESPONSE_URL, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
    })
        .then(response => response.json())
        .catch(error => error);

export default checkUserAuthResource;
