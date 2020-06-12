import {handleActions} from 'redux-actions';

import {
    CHECK_USER_AUTH_SUCCESS,
    CHECK_USER_AUTH_FAIL,
    SIGN_IN_FAIL,
    SIGN_IN_SUCCESS,
    USER_LOGOUT,
    // Регистрация
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    // eslint-disable-next-line no-unused-vars
    CheckUserAuthSuccessPayload,
    // eslint-disable-next-line no-unused-vars
    SignInFailPayload,
    // eslint-disable-next-line no-unused-vars
    SignInSuccessPayload,
    // eslint-disable-next-line no-unused-vars
    RegistrationSuccessPayload,
    // eslint-disable-next-line no-unused-vars
    RegistrationFailPayload,
} from 'actions/Auth';

type State = {
    isAuth: boolean,
    username: string,
    error: {
        message?: {
            [key: string]: string,
        },
    },
};

const defaultState = {
    isAuth: false,
    username: '',
    error: {},
};

export default handleActions({
    [CHECK_USER_AUTH_SUCCESS]: (state: State, {payload}: {payload: CheckUserAuthSuccessPayload}) => ({
        ...state,
        isAuth: payload.isAuth,
        username: payload.username || '',
    }),
    [CHECK_USER_AUTH_FAIL]: (state: State) => ({
        ...state,
        isAuth: false,
    }),
    [SIGN_IN_FAIL]: (state: State, {payload}: {payload: SignInFailPayload}) => ({
        ...state,
        error: payload.error,
    }),
    [SIGN_IN_SUCCESS]: (state: State, {payload}: {payload: CheckUserAuthSuccessPayload}) => ({
        ...state,
        isAuth: payload.isAuth,
        username: payload.username || '',
        error: {},
    }),
    [USER_LOGOUT]: (state: State) => ({
        ...state,
        isAuth: false,
        username: '',
    }),

    [REGISTRATION_SUCCESS]: (state: State, {payload}: {payload: RegistrationSuccessPayload}) => ({
        ...state,
        isAuth: payload.isAuth,
        username: payload.username || '',
        error: {},
    }),
    [REGISTRATION_FAIL]: (state: State, {payload}: {payload: RegistrationFailPayload}) => ({
        ...state,
        isAuth: false,
        error: payload.error,
    }),
}, defaultState);
