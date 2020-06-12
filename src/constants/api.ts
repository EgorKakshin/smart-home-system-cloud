export const SERVER_ADDRESS = 'http://127.0.0.1:3000';

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'authentication': localStorage.getItem('jwt'),
};
