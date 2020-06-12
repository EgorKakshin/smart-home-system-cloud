import {SERVER_ADDRESS} from 'constants/api';
const RESPONSE_URL = `${SERVER_ADDRESS}/signIn`;

type Params = {
    username: string,
    password: string,
};

const signIn = ({username, password}: Params) =>
    fetch(RESPONSE_URL, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
        .then(response => response.json())
        .catch(error => error);


export default signIn;
