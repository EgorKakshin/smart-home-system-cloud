import React, {useEffect} from 'react';

import HeaderContainer from 'containers/Header';
import ContentContainer from 'containers/Content';

import './styles.scss';

type Props = {
    checkUserAuth: () => void,
};

const App = ({checkUserAuth}: Props) => {
    useEffect(() => checkUserAuth());
    return (
        <div className='root'>
            <HeaderContainer />
            <ContentContainer />
        </div>
    );
};

export default App;
