import React, { useState } from 'react';
import { connect } from 'react-redux';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../../actions/users/logoutUser';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import ShortcutsModal from '../../ShortcutsModal';
import { ThMenuIcon, Toggle } from './Logout.style';


const Logout = ({ logoutUser, history, auth }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userName = auth.user.name;
    const [isSelected, setSelected] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const getShortcutsInfo = () => {
        setOpen(!isOpen);
    };

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleClick = () => {
        logoutUser(history);
    };

    const handleChangeColor = () => {
        setSelected(!isSelected);
    };

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} onClick={handleChangeColor}>
                <Toggle isSelected={isSelected}>
                    <ThMenuIcon/>
                </Toggle>
                <DropdownMenu right>
                    <DropdownItem header>Hello, {userName}😊</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem onClick={getShortcutsInfo}>Shortcuts</DropdownItem>
                    <DropdownItem onClick={handleClick}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {isOpen && <ShortcutsModal isOpen={true} setOpen={setOpen}/>}
        </>
    );
};

const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(
    mapStateToProps,
    { logoutUser }
)(withRouter(Logout));