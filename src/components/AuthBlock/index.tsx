import React, {useState} from 'react';

import AuthFormContainer from 'containers/AuthForm';
import RegisterFormContainer from 'containers/RegisterForm';

const AUTH_CONTENT = {
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
    RESET_PASSWORD: 'RESET_PASSWORD',
};

const AuthBlock = () => {
    const [authContent, setAuthContent] = useState(AUTH_CONTENT.SIGN_IN);

    if (authContent === AUTH_CONTENT.SIGN_UP) {
        return (
            <RegisterFormContainer />
        );
    }

    return <AuthFormContainer onRegisterClick={() => setAuthContent(AUTH_CONTENT.SIGN_UP)}/>;
};

export default AuthBlock;
