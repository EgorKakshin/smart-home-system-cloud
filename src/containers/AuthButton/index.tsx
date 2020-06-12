import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import {userLogout} from 'actions/Auth';
import AuthButton from 'components/AuthButton';

const DOCUMENTATION_LINK = 'https://github.com/EgorKakshin/quizplanner-wep-application';

const mapStateToProps = (state: State) => ({
    isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogoutButtonClick: () => dispatch(userLogout()),
    onDocumentationLinkClick: () => window.open(DOCUMENTATION_LINK, '_blank'),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthButton);
