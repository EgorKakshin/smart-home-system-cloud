import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';

import Header from 'components/Header';

const mapStateToProps = (state: State) => ({
    isAuth: state.user.isAuth,
    username: state.user.username,
});

export default connect(
    mapStateToProps,
)(Header);
