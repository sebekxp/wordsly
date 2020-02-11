import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import HigherOrderAuthComponent from './ HigherOrderAuthComponent';
import { loginUser } from './AuthSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
    const dispatch = useDispatch();
    const [accountData, setAccountData] = useState({
        email: '',
        password: '',
        errors: {
            email: ' ',
            password: ' '
        }
    });

    const validateForm = () => {
        let valid = true;
        Object.values(accountData.errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(validateForm());
        if(validateForm()){
        const userData = {
            email: accountData.email,
            password: accountData.password
        };
        dispatch(loginUser(userData))
        }
    };

    const validEmailRegex =
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

    const onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        const { errors } = accountData;

        switch (name) {

            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 6
                        ? 'Password must be at least 6 characters long!'
                        : '';
                break;
            default:
                break;
        }

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
        return error.length === 0;
    };

    const getInvalid = (error) => {
        return error.length > 1;
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
            <Form style={formStyle} onSubmit={e => onSubmit(e)}>
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
                {/*<Link to='/home'>*/}
                    <Button color="primary" style={btn} type={'submit'}>sign in</Button>
                {/*</Link>*/}
            </Form>
        </>
    );
};

export default HigherOrderAuthComponent(Login);