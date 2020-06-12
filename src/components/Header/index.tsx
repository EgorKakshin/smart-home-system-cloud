/**
 * Компонент шапки страницы
 */

import React from 'react';

import Text from 'uikit/components/Text';
import AuthButtonContainer from 'containers/AuthButton';

import './styles.scss';

const Header = () =>
    <div className='header'>
        <Text color='white' size='l' style='app-name'>
            Smart-home-system
        </Text>
        <div className='button-block'>
            <AuthButtonContainer />
        </div>
    </div>;

export default Header;
