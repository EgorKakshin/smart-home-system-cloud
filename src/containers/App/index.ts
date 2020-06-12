import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';

import {checkUserAuth} from 'actions/Auth';
import App from 'components/App';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkUserAuth: () => dispatch(checkUserAuth()),
});

export default connect(null, mapDispatchToProps)(App);
