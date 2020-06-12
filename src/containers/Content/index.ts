import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import Content from 'components/Content';

const getUserAuthStatus = (state: State) => state.user.isAuth;

const mapStateToProps = (state: State) => ({
    isAuth: getUserAuthStatus(state),
});

export default connect(
    mapStateToProps
)(Content);
