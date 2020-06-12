import {connect} from 'react-redux';
//eslint-disable-next-line no-unused-vars
import type {Dispatch} from 'redux';
//eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import AuthForm from 'components/AuthForm';
import {authButtonClick} from 'actions/Auth';
//eslint-disable-next-line no-unused-vars
import type {AuthButtonClickPayload} from 'actions/Auth';

type Props = {
    onRegisterClick: () => void,
};

const mapStateToProps = (state: State, props: Props) => ({
    error: state.user.error || {},
    onRegisterClick: props.onRegisterClick,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAuthButtonClick: ({username, password}: AuthButtonClickPayload) =>
        dispatch(authButtonClick({username, password})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthForm);
