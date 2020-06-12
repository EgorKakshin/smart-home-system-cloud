//eslint-disable-next-line no-unused-vars
import React, {useState, SyntheticEvent} from 'react';

import LockIcon from '@material-ui/icons/Lock';
import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {StylesProvider} from '@material-ui/core/styles';
import Text from 'uikit/components/Text';
//eslint-disable-next-line no-unused-vars
import {AuthButtonClickPayload} from 'actions/Auth';

import './styles.scss';

type Props = {
    error: {
        code: string,
        message: {
            [key: string]: string,
        },
    },
    onAuthButtonClick: ({username, password}: AuthButtonClickPayload) => void,
    onRegisterClick: () => void,
};

const AuthBlock = ({onAuthButtonClick, error, onRegisterClick}: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSubmitClick = (event: SyntheticEvent) => {
        event.preventDefault();
        return onAuthButtonClick({username, password});
    };

    const isLoginFieldError = Boolean(
        error.message &&
        (error.message.username ||
            error.message.authUsername)
    );
    const helperLoginText = error.message && (error.message.username || error.message.authUsername) || '';

    const isPasswordFieldError = Boolean(
        error.message &&
        (error.message.authPassword ||
            error.message.password)
    );
    const helperPasswordText = error.message && (error.message.password || error.message.authPassword) || '';

    return (
        <div className='authBlock'>
            <LockIcon className='iconLock' fontSize='large' />
            <Text color='white' size='xl' className='authText'>
                Авторизация
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
                    <Button
                        type='submit'
                        className='authButton'
                        size='large'
                        variant='contained'
                    >
                        Вход
                    </Button>
                </StylesProvider>
            </form>
            <div className='linksList'>
                <Link href='/changePassword'>
                    <Text color='white' size='m' >
                        Забыли пароль?
                    </Text>
                </Link>
                <Link onClick={onRegisterClick}>
                    <Text color='white' size='m'>
                        Регистрация
                    </Text>
                </Link>
            </div>
        </div>
    );
};

export default AuthBlock;
