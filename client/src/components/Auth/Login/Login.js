import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
// noinspection ES6CheckImport
import { Link, withRouter } from 'react-router-dom';
import HigherOrderAuthComponent from '../AbstractAuthComponent';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/users/loginUser';
import { clearErrors } from '../../../redux/authErrorReducer';


const Login = ({ loginUser, propsErrors, history, auth, clearErrors }) => {
    const [accountData, setAccountData] = useState({
        email: '',
        password: '',
        errors: {}
    });

    useEffect(() => {
        clearErrors();
    }, []);

    useEffect(() => {
        setAccountData({ ...accountData, errors: propsErrors });
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

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const inputStyle = {
        width: '400px'
    };

    const header = {
        display: 'flex',
        alignItems: 'baseline',
        margin: '0 auto',
        marginBottom: '20px'
    };

    const linkStyle = {
        fontSize: '18px',
        padding: '5px'
    };

    const btn = {
        marginTop: '30px',
        width: '150px',
        fontSize: '18px',
        textTransform: 'uppercase',
        fontWeight: '500'
    };

    const h2Style = {
        fontWeight: '750'
    };

    const pStyle = {
        fontSize: '20px'
    };

    const getValid = (error) => {
        return error?.length === 0;
    };

    const getInvalid = (error) => {
        return error?.length > 1;
    };

    const getFeedback = (text) => {
        return getValid(text)
            ? null
            : text;
    };

    const getHeader = () => {
        return (
            <>
                <h2><span style={h2Style}>Login</span> below</h2>
                <div style={header}>
                    <p style={pStyle}>Don't have an account?</p>
                    <Link to="/register" style={linkStyle}>Register</Link>
                </div>
            </>
        );
    };

    return (
        <>
            {getHeader()}
            <Form noValidate style={formStyle} onSubmit={e => onSubmit(e)}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email"
                           id="email" placeholder="Email"
                           style={inputStyle}
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
                    <Input type="password" name="password"
                           id="password" placeholder="Password"
                           style={inputStyle}
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
                <Button color="primary" style={btn} type={'submit'}>sign in</Button>
            </Form>
        </>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
    propsErrors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser, clearErrors }
)(withRouter(HigherOrderAuthComponent(Login)));
