import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {Dispatch} from 'redux';
// eslint-disable-next-line no-unused-vars
import {State} from 'entities';
import RegisterForm from 'components/RegisterForm';
import {
    registerButtonClick,
    // eslint-disable-next-line no-unused-vars
    RegisterButtonClickPayload,
} from 'actions/Auth';

const mapStateToProps = (state: State) => ({
    error: state.user.error || {},
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRegisterButtonClick: ({username, password}: RegisterButtonClickPayload) =>
        dispatch(registerButtonClick({username, password})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterForm);
