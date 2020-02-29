import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HigherOrderAuthComponent from '../AbstractAuthComponent';
import { loginUser } from '../../../actions/users/loginUser';
import { clearErrors } from '../../../redux/authErrorReducer';
import { authProp } from '../../utils/propTypes';
import {
    ButtonWrapper,
    FormWrapper,
    Header,
    InputWrapper,
    LinkWrapper,
    P,
    SPAN
} from './Login.style';

export const getValid = error => {
    return error?.length === 0;
};

export const getInvalid = error => {
    return error?.length > 1;
};

export const getFeedback = text => {
    return getValid(text) ? null : text;
};

const Login = ({ loginUser, propsErrors, history, auth, clearErrors }) => {
    const [accountData, setAccountData] = useState({
        email: '',
        password: '',
        errors: {}
    });

    useEffect(() => {
        clearErrors();
    }, [clearErrors]);

    useEffect(() => {
        setAccountData(prevState => ({ ...prevState, errors: propsErrors }));
    }, [propsErrors]);

    useEffect(() => {
        if (auth.isAuthenticated) {
            history.replace('/home');
        }
    }, [auth, history]);

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: accountData.email,
            password: accountData.password
        };

        loginUser(userData);
    };

    const onChange = e => {
        e.preventDefault();

        setAccountData({
            ...accountData,
            [e.target.id]: e.target.value
        });
    };

    const getHeader = () => {
        return (
            <>
                <h2>
                    <SPAN>Login</SPAN> below
                </h2>
                <Header>
                    <P>Don't have an account?</P>
                    <LinkWrapper to="/register">Register</LinkWrapper>
                </Header>
            </>
        );
    };

    return (
        <>
            {getHeader()}
            <FormWrapper noValidate onSubmit={e => onSubmit(e)}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <InputWrapper
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={e => onChange(e)}
                        value={accountData.email}
                        error={accountData.errors.email}
                        valid={getValid(accountData.errors.email)}
                        invalid={getInvalid(accountData.errors.email)}
                    />
                    <FormFeedback
                        valid={getValid(accountData.errors.email)}
                        invalid={getInvalid(accountData.errors.email).toString()}
                    >
                        {getFeedback(accountData.errors.email)}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <InputWrapper
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={e => onChange(e)}
                        value={accountData.password}
                        error={accountData.errors.password}
                        valid={getValid(accountData.errors.password)}
                        invalid={getInvalid(accountData.errors.password)}
                    />
                    <FormFeedback
                        valid={getValid(accountData.errors.password)}
                        invalid={getInvalid(accountData.errors.password).toString()}
                    >
                        {getFeedback(accountData.errors.password)}
                    </FormFeedback>
                </FormGroup>
                <ButtonWrapper color="primary" type="submit">
                    sign in
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    propsErrors: PropTypes.PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.shape({
            email: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired
        })
    ]).isRequired,
    history: PropTypes.shape({
        replace: PropTypes.func.isRequired
    }).isRequired,
    auth: authProp.isRequired,
    clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    propsErrors: state.errors
});

export default connect(mapStateToProps, { loginUser, clearErrors })(
    withRouter(HigherOrderAuthComponent(Login))
);
