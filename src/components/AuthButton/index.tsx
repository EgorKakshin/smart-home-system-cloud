import React from 'react';
import Button from '@material-ui/core/Button';
import {StylesProvider} from '@material-ui/core/styles';

import './styles.scss';

type Props = {
    isAuth: boolean,
    onLogoutButtonClick: () => void,
    onDocumentationLinkClick: () => void,
};

const AuthButton = ({isAuth, onLogoutButtonClick, onDocumentationLinkClick}: Props) =>
    <div className='buttonsBlock'>
        <StylesProvider injectFirst>
            <Button
                className='button'
                size='small'
                onClick={onDocumentationLinkClick}
            >
                Документация
            </Button>
        </StylesProvider>
        { isAuth &&
        <StylesProvider injectFirst>
            <Button
                className='button'
                color='secondary'
                size='small'
                variant='contained'
                onClick={onLogoutButtonClick}
            >
            Выход
            </Button>
        </StylesProvider>}
    </div>;

export default AuthButton;
