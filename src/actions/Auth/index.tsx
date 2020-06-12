import {createActions} from 'redux-actions';

// загрузка страницы
export const CHECK_USER_AUTH = '#CHECK_USER_AUTH';
export const CHECK_USER_AUTH_SUCCESS = '#CHECK_USER_AUTH_SUCCESS';
export const CHECK_USER_AUTH_FAIL = '#CHECK_USER_AUTH_FAIL';

// авторизация
export const AUTH_BUTTON_CLICK = '#AUTH_BUTTON_CLICK';
export const SIGN_IN_SUCCESS = '#SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = '#SIGN_IN_FAIL';

// Выход
export const USER_LOGOUT = '#USER_LOGOUT';

// Регистрация
export const REGISTER_BUTTON_CLICK = '#REGISTER_BUTTON_CLICK';
export const REGISTRATION_SUCCESS = '#REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = '#REGISTRATION_FAIL';

export type AuthButtonClickPayload = {
    username: string,
    password: string,
};

export type SignInSuccessPayload = {
    isAuth: boolean,
    username: string,
};

export type SignInFailPayload = {
    error: {
        message?: {
            [key: string]: string,
        },
    },
};

export type CheckUserAuthSuccessPayload = {
    isAuth: boolean,
    username?: string,
};

export type RegisterButtonClickPayload = {
    username: string,
    password: string,
};

export type RegistrationSuccessPayload = {
    isAuth: boolean,
    username?: string,
};

export type RegistrationFailPayload = {
    error: {
        message?: {
            [key: string]: string,
        },
    },
};

export const {
    // авторизация
    authButtonClick,
    signInSuccess,
    signInFail,
    // загрузска страницы
    checkUserAuth,
    checkUserAuthSuccess,
    checkUserAuthFail,
    // выход
    userLogout,
    // регистрация
    registerButtonClick,
    registrationSuccess,
    registrationFail,
} = createActions({
    // авторизация
    [AUTH_BUTTON_CLICK]: ({username, password}: AuthButtonClickPayload) => ({
        username,
        password,
    }),
    [SIGN_IN_SUCCESS]: ({isAuth, username}: SignInSuccessPayload) => ({
        isAuth,
        username,
    }),
    [SIGN_IN_FAIL]: ({error}: SignInFailPayload) => ({
        error,
    }),
    // Загрузка страницы
    [CHECK_USER_AUTH]: () => null,
    [CHECK_USER_AUTH_SUCCESS]: ({isAuth, username}: CheckUserAuthSuccessPayload) => ({
        isAuth,
        username,
    }),
    [CHECK_USER_AUTH_FAIL]: () => null,
    // выход
    [USER_LOGOUT]: () => null,
    // Регистрация
    [REGISTER_BUTTON_CLICK]: ({username, password}: RegisterButtonClickPayload) => ({
        username,
        password,
    }),
    [REGISTRATION_SUCCESS]: ({isAuth, username}: RegistrationSuccessPayload) => ({
        isAuth,
        username,
    }),
    [REGISTRATION_FAIL]: ({error}: RegistrationFailPayload) => ({
        error,
    }),
});
