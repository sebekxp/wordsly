import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

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
        RegExp(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

    const onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        const { errors } = accountData;
        console.log(errors);
        switch (name) {
            case 'name':
                errors.name = value.length <= 3
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
                break;
            case 'password2':
                errors.password2 =
                    value !== accountData.password
                        ? 'Passwords must match!'
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
    const container = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '550px',
        margin: '200px auto'
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

    const getValid = (value) => {
        return value.length === 0;
    };

    const getInvalid = (value)=>{
        return value.length > 0;
    };

    return (
        <div style={container}>
            <h2><span style={h2Style}>Register</span> below</h2>
            <div style={header}>
                <p style={pStyle}>Already have an account?</p>
                <a href="" style={linkStyle}>Login</a>
            </div>
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
                           invalid={getValid(accountData.errors.name)}
                    />
                    <FormFeedback valid={getValid(accountData.errors.name)} invalid={getInvalid(accountData.errors.name)}>
                        {getValid(accountData.errors.name)
                            ? 'Sweet! that name is available'
                            : 'NOPE'}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email"
                           id="email" placeholder="Email"
                           style={inputStyle}
                           onChange={e => onChange(e)}
                           value={accountData.email}
                           error={accountData.errors.email}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password"
                           id="password" placeholder="Password"
                           style={inputStyle}
                           onChange={e => onChange(e)}
                           value={accountData.password}
                           error={accountData.errors.password}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password2">Confirm Password</Label>
                    <Input type="password" name="password2"
                           id="password2" placeholder="Confirm Password"
                           style={inputStyle}
                           onChange={e => onChange(e)}
                           value={accountData.password2}
                           error={accountData.errors.password2}/>
                </FormGroup>
                <Button color="primary" style={btn} type={'submit'}>sign up</Button>
            </Form>
        </div>
    );
};

export default Register;