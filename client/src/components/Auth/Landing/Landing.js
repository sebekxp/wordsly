import React from 'react';
import { Link } from 'react-router-dom';
import HigherOrderAuthComponent from '../AbstractAuthComponent';
import { CustomButton, P, Wrapper } from './Landing.style';


const Landing = () => {

    return (
        <>
            <h2>You want to learn english quickly?</h2>
            <P>
                Knowledge of this vocabulary group makes it possible to understand 80% or even 95% of the message.
            </P>
            <Wrapper>
                <Link to='/register'>
                    <CustomButton color="primary" type="submit">register</CustomButton>
                </Link>
                <Link to='/login'>
                    <CustomButton color="primary" type="submit">Login</CustomButton>
                </Link>
            </Wrapper>

        </>
    );
};

export default HigherOrderAuthComponent(Landing);