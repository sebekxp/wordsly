import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { logoutUser } from '../../../actions/users/logoutUser';
import ShortcutsModal from '../../ShortcutsModal';
import { ThMenuIcon, Toggle } from './Logout.style';
import { authProp } from '../../utils/propTypes';

const Logout = ({ logoutUser, history, auth }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userName = auth.user.name;
    const [isOpen, setOpen] = useState(false);

    const getShortcutsInfo = () => {
        setOpen(!isOpen);
    };

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleClick = () => {
        logoutUser(history);
    };

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <Toggle>
                    <ThMenuIcon />
                </Toggle>
                <DropdownMenu right>
                    <DropdownItem header>Hello, {userName}😊</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={getShortcutsInfo}>Shortcuts</DropdownItem>
                    <DropdownItem onClick={handleClick}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {isOpen && <ShortcutsModal isOpen setOpen={setOpen} />}
        </>
    );
};

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    auth: authProp.isRequired
};

const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Logout));
