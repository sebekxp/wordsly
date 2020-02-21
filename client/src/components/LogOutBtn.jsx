import React from 'react';
import styled from 'styled-components';
import { LogOut } from 'styled-icons/boxicons-regular/LogOut';
import { connect } from 'react-redux';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { logoutUser } from './auth/actions/logoutUser';


const LogOutComponent = ({ logoutUser, history }) => {
    const LogOutBtn = styled(LogOut)`
        width: 50px;
        height: 100%;
        color: white;
        
        &:hover {
            color: red;
        }
    `;

    const handleClick = () => {
        logoutUser(history);
    };

    return (
        <LogOutBtn onClick={handleClick}/>
    );
};


export default connect(
    null,
    { logoutUser }
)(withRouter(LogOutComponent));