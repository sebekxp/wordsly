import React, { useState } from 'react';
import { connect } from 'react-redux';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { logoutUser } from './auth/actions/logoutUser';
import { Alert, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Menu } from 'styled-icons/feather/Menu';
import styled from 'styled-components';
import Colors from './Colors';
import ModalExample from './ShortcutsModal';


const LogOutComponent = ({ logoutUser, history, auth }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userName = auth.user.name;
    const [isSelected, setSelected] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const getShortcutsInfo = () => {
        setOpen(!isOpen);
    };

    const getColor = () => {
        return isSelected ?
            Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND :
            Colors.BOOKMARKS_ELEMENT_BACKGROUND;
    };
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleClick = () => {
        logoutUser(history);
    };

    const handleChangeColor = () => {
        setSelected(!isSelected);

    };

    const ThMenuIcon = styled(Menu)`
        width: 35px;
    `;

    const dropDownStyle = {
        height: '100%',
        backgroundColor: getColor(),
        color: 'white'
    };

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} onClick={handleChangeColor}>
                <DropdownToggle style={dropDownStyle} color={'red'}>
                    <ThMenuIcon/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header>Hello, {userName}😊</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem onClick={getShortcutsInfo}>Shortcuts</DropdownItem>
                    <DropdownItem onClick={handleClick}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {isOpen && <ModalExample isOpen={true} setOpen={setOpen}/>}
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
)(withRouter(LogOutComponent));