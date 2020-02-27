import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import HigherOrderAuthComponent from '../AbstractAuthComponent';
import { registerUser } from '../../../actions/users/registerUser';
import { clearErrors } from '../../../redux/authErrorReducer';
import { AlertWrapper } from './Register.style';
import {
    ButtonWrapper,
    FormWrapper,
    Header,
    InputWrapper,
    LinkWrapper,
    P,
    SPAN
} from '../Login/Login.style';
import { getFeedback, getInvalid, getValid } from '../Login/Login';

const Register = ({ registerUser, propsErrors, history, clearErrors }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [accountData, setAccountData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    });

    useEffect(() => {
        clearErrors();
    }, [clearErrors]);

    useEffect(() => {
        setAccountData(prevState => ({ ...prevState, errors: propsErrors }));
    }, [propsErrors]);

    const validateForm = () => {
        let valid = true;

        Object.values(accountData.errors).forEach(val => {
            if (val.length > 0) {
                valid = false;
            }
        });

        return valid;
    };

    const onSubmit = e => {
        e.preventDefault();

        if (validateForm()) {
            const newUser = {
                name: accountData.name,
                email: accountData.email,
                password: accountData.password,
                password2: accountData.password2
            };

            registerUser(newUser, history, setShowAlert);
        }
    };

    const validEmailRegex = RegExp(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );

    const onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        const { errors } = accountData;

        let localAccountData = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        switch (name) {
            case 'name':
                localAccountData = {
                    ...accountData,
                    errors: {
                        ...errors,
                        name: value.length < 3 ? 'Name must be at least 3 character!' : ''
                    }
                };
                break;
            case 'email':
                localAccountData = {
                    ...accountData,
                    errors: {
                        ...errors,
                        email: validEmailRegex.test(value) ? '' : 'Email is not valid!'
                    }
                };
                break;
            case 'password':
                localAccountData = {
                    ...accountData,
                    errors: {
                        ...errors,
                        password:
                            value.length < 6 ? 'Password must be at least 6 characters long!' : ''
                    }
                };

                localAccountData = {
                    ...accountData,
                    errors: {
                        ...localAccountData.errors,
                        password2:
                            localAccountData?.errors?.password?.length === 0 &&
                            value === accountData.password2
                                ? ''
                                : 'Passwords must match!'
                    }
                };

                break;
            case 'password2':
                localAccountData = {
                    ...accountData,
                    errors: {
                        ...accountData.errors,
                        password2:
                            errors?.password?.length === 0 && value === accountData.password
                                ? ''
                                : 'Passwords must match!'
                    }
                };
                break;
            default:
                break;
        }

        setAccountData({
            ...localAccountData,
            [e.target.id]: e.target.value
        });
    };

    const getHeader = () => {
        return (
            <>
                <h2>
                    <SPAN>Create</SPAN> an account
                </h2>
                <Header>
                    <P>Already have an account?</P>
                    <LinkWrapper to="/login">Login</LinkWrapper>
                </Header>
            </>
        );
    };

    return (
        <>
            {getHeader()}
            <FormWrapper onSubmit={e => onSubmit(e)} noValidate>
                <FormGroup>
                    <Label for="text">Name</Label>
                    <InputWrapper
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={e => onChange(e)}
                        value={accountData.name}
                        error={accountData.errors.name}
                        valid={getValid(accountData.errors.name)}
                        invalid={getInvalid(accountData.errors.name)}
                    />
                    <FormFeedback
                        valid={getValid(accountData.errors.name)}
                        invalid={getInvalid(accountData.errors.name).toString()}
                    >
                        {getFeedback(accountData.errors.name)}
                    </FormFeedback>
                </FormGroup>
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
                <FormGroup>
                    <Label for="password2">Confirm Password</Label>
                    <InputWrapper
                        type="password"
                        name="password2"
                        id="password2"
                        placeholder="Confirm Password"
                        onChange={e => onChange(e)}
                        value={accountData.password2}
                        error={accountData.errors.password2}
                        valid={getValid(accountData.errors.password2)}
                        invalid={getInvalid(accountData.errors.password2)}
                    />
                    <FormFeedback
                        valid={getValid(accountData.errors.password2)}
                        invalid={getInvalid(accountData.errors.password2).toString()}
                    >
                        {getFeedback(accountData.errors.password2)}
                    </FormFeedback>
                </FormGroup>
                <ButtonWrapper color="primary" type="submit">
                    sign up
                </ButtonWrapper>
            </FormWrapper>
            {showAlert && (
                <AlertWrapper color="success">
                    <h4 className="alert-heading">Well done!</h4>
                    <hr />
                    <p>
                        You have successfully created an account
                        <span role="img" aria-label="Smile">
                            😎
                        </span>{' '}
                        You will be redirected to the login page
                        <span role="img" aria-label="Happy">
                            ✨
                        </span>
                    </p>
                </AlertWrapper>
            )}
        </>
    );
};

const mapStateToProps = state => {
    const { auth } = state;
    const propsErrors = state.errors;

    return {
        auth,
        propsErrors
    };
};

export default connect(mapStateToProps, { registerUser, clearErrors })(
    withRouter(HigherOrderAuthComponent(Register))
);
