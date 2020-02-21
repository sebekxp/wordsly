import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import HigherOrderAuthComponent from './ HigherOrderAuthComponent';


const Landing = () => {
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

    const pStyle = {
        fontSize: '18px',
        margin: '10px',
        textAlign: 'center'
    };

    return (
        <>
            <h2>You want to learn english quickly?</h2>
            <p style={pStyle}>
                Knowledge of this vocabulary group makes it possible to understand 80% or even 95% of the message.
            </p>
            <div style={btnContainer}>
                <Link to='/register'>
                    <Button color="primary" style={btn} type={'submit'}>register</Button>
                </Link>
                <Link to='/login'>
                    <Button color="primary" style={btn} type={'submit'}>Login</Button>
                </Link>
            </div>

        </>
    );
};

export default HigherOrderAuthComponent(Landing);