import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';


const Landing = () => {
    const container = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '550px',
        margin: '200px auto'
    };
    const btn = {
        marginTop: '30px',
        width: '150px',
        fontSize: '22px',
        textTransform: 'uppercase',
        fontWeight: '500'
    };
    const btnContainer = {
        display: 'flex',
        width: '400px',
        justifyContent: 'space-between'
    };

    const headerStyle = {};

    return (
        <div style={container}>
            <h1>You want to learn english quickly?</h1>

            <h5>Knowledge of this vocabulary group makes it possible to understand 75%, 80% or even 95% of the
                message.</h5>

            <div style={btnContainer}>
                <Link to='/register'>
                    <Button color="primary" style={btn} type={'submit'}>register</Button>
                </Link>
                <Link to='/login'>
                    <Button color="primary" style={btn} type={'submit'}>Login</Button>
                </Link>
            </div>

        </div>

    );
};

export default Landing;