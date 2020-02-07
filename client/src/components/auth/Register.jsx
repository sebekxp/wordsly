import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import HigherOrderAuthComponent from './ HigherOrderAuthComponent';
import styled from 'styled-components';
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft';

const Register = () => {
    const [accountData, setAccountData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {
            name: ' ',
            email: ' ',
            password: ' ',
            password2: ' '
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
        const newUser = {
            name: accountData.name,
            email: accountData.email,
            password: accountData.password,
            password2: accountData.password2
        };
        console.log(newUser);
    };

    const validEmailRegex =
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

    const onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        const { errors } = accountData;

        switch (name) {
            case 'name':
                errors.name = value.length < 3
                    ? 'Name must be at least 3 character!'
                    : '';
                break;
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
                errors.password2 = (errors.password.length === 0) &&
                (value === accountData.password2)
                    ? ''
                    : 'Passwords must match!';
                break;
            case 'password2':
                errors.password2 = (errors.password.length === 0) &&
                (value === accountData.password)
                    ? ''
                    : 'Passwords must match!';
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
                <h2><span style={h2Style}>Create</span> an account</h2>
                <div style={header}>
                    <p style={pStyle}>Already have an account?</p>
                    <Link to="/login" style={linkStyle}>Login</Link>
                </div>
            </>
        );
    };

    return (
        <>
            {getHeader()}
            <Form style={formStyle} onSubmit={e => onSubmit(e)}>
                <FormGroup>
                    <Label for="text">Name</Label>
                    <Input type="text" name="name"
                           id="name" placeholder="Name"
                           style={inputStyle}
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
                <FormGroup>
                    <Label for="password2">Confirm Password</Label>
                    <Input type="password" name="password2"
                           id="password2" placeholder="Confirm Password"
                           style={inputStyle}
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
                <Button color="primary" style={btn} type={'submit'}>sign up</Button>
            </Form>
        </>
    );
};

export default HigherOrderAuthComponent(Register);