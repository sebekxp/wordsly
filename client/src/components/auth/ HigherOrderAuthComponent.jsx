import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft';
import { Link } from 'react-router-dom';

export default (Component) => {
    const container = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '550px',
        margin: '200px auto'
    };

    const BackToHome = styled(ArrowLeft)`
        width: 50px;
        height: 30px;
    `;

    const backToHomeWrapper = {
        display: 'flex',
        fontWeight: '600',
        justifyContent: 'center',
        textTransform: 'uppercase'
    };

    return (props) => (

        <div style={container}>
            <Link to="/" style={backToHomeWrapper}>
                <BackToHome/>
                <p> back to home</p>
            </Link>
            <Component {...props} />
        </div>
    );
};