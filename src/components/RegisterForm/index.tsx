//eslint-disable-next-line no-unused-vars
import React, {useState, SyntheticEvent} from 'react';

import LockIcon from '@material-ui/icons/Lock';
import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {StylesProvider} from '@material-ui/core/styles';
import Text from 'uikit/components/Text';
// eslint-disable-next-line no-unused-vars
import {RegisterButtonClickPayload} from 'actions/Auth';

type Props = {
    error: {
        code: string,
        message: {
            [key: string]: string,
        },
    },
    onRegisterButtonClick: ({username, password}: RegisterButtonClickPayload) => void,
};

const RegisterForm = ({onRegisterButtonClick, error}: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onHandleSubmitClick = (event: SyntheticEvent) => {
        event.preventDefault();
        return onRegisterButtonClick({username, password});
    };

    const isLoginFieldError = Boolean(error.message
        && (error.message.username || error.message.registerUsername));
    const helperLoginText = error.message
        && (error.message.username || error.message.registerUsername);

    const isPasswordFieldError = Boolean(error.message
        && (error.message.password || error.message.registerPassword));
    const helperPasswordText = error.message
        &&  (error.message.password || error.message.registerPassword);

    const isPasswordRepeatFieldError = Boolean(error.message
        && (error.message.passwordRepeat || error.message.registerPasswordRepeat));
    const helperPasswordRepeatText = error.message
        &&  (error.message.passwordRepeat || error.message.registerPasswordRepeat);

    return (
        <div className='authBlock'>
            <LockIcon className='iconLock' fontSize='large' />
            <Text color='white' size='xl' className='authText'>
                Регистрация
            </Text>
            <form onSubmit={onHandleSubmitClick} className='authForm'>
                <StylesProvider injectFirst>
                    <TextFields
                        id='login'
                        label='Логин'
                        fullWidth={true}
                        className='loginField'
                        onChange={e => setUsername(e.target.value)}
                        error={isLoginFieldError}
                        helperText={helperLoginText}
                    />
                </StylesProvider>
                <StylesProvider injectFirst>
                    <TextFields
                        id='password'
                        label='Пароль'
                        type='password'
                        fullWidth={true}
                        className='passwordField'
                        onChange={e => setPassword(e.target.value)}
                        error={isPasswordFieldError}
                        helperText={helperPasswordText}
                    />
                </StylesProvider>
                <StylesProvider injectFirst>
                    <TextFields
                        id='passwordRepeat'
                        label='Повторите пароль'
                        type='password'
                        fullWidth={true}
                        className='passwordField'
                        onChange={e => setPasswordRepeat(e.target.value)}
                        error={isPasswordRepeatFieldError}
                        helperText={helperPasswordRepeatText}
                    />
                </StylesProvider>
                <StylesProvider injectFirst>
                    <Button
                        type='submit'
                        className='authButton'
                        size='large'
                        variant='contained'
                    >
                        Зарегестрироваться
                    </Button>
                </StylesProvider>
            </form>
        </div>
    );
};

export default RegisterForm;
