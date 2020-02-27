import React, { useState } from 'react';
import { connect } from 'react-redux';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { logoutUser } from '../../../actions/users/logoutUser';
import ShortcutsModal from '../../ShortcutsModal';
import { ThMenuIcon, Toggle } from './Logout.style';

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

const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Logout));
