import React from 'react';
import { BackToHome, BackToHomeWrapper, Container } from './AbstractAuthComponent.style';

export default (Component) => {
    return (props) => (
        <Container>
            <BackToHomeWrapper to="/">
                <BackToHome/>
                <p> back to home</p>
            </BackToHomeWrapper>
            <Component {...props} />
        </Container>
    );
};