import React from 'react';

import AuthBlock from 'components/AuthBlock';
import ApplicationContainer from 'containers/Application';

type Props = {
    isAuth: boolean,
};

const Content = ({isAuth}: Props) =>
    <div>
        {
            isAuth
                ? <ApplicationContainer />
                : <AuthBlock />
        }
    </div>;


export default Content;
