import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Line, MenuItem, MenuItemsWrapper, ThMenuIcon } from './DropdownMenu.style';

const DropdownMenu = ({ logoutUser, history, userName, setOpen }) => {
    const [open, toggleOpen] = useState(false);
    const target = useRef(null);

    const handleKeydown = event => {
        const { key } = event;
        if (key === 'Escape') {
            toggleOpen(false);
            target.current.blur();
        }
    };

    useEffect(() => {
        if (open) {
            target.current.addEventListener('keydown', handleKeydown);
        } else {
            target.current.removeEventListener('keydown', handleKeydown);
        }
    }, [open]);

    const handleShortcutClick = () => {
        setOpen(prevState => !prevState);
    };

    const logout = () => {
        logoutUser(history);
    };

    const handleBlur = e => {
        if (e.relatedTarget !== null) return;
        toggleOpen(false);
    };

    const handleClick = () => {
        if (open) target.current.blur();
        else target.current.focus();

        toggleOpen(!open);
    };

    return (
        <>
            <Dropdown onBlur={handleBlur} onClick={handleClick} ref={target}>
                <ThMenuIcon />
                {open && (
                    <MenuItemsWrapper open={open}>
                        <MenuItem header tabIndex={0}>
                            Hello, {userName} 😊
                        </MenuItem>
                        <Line />
                        <MenuItem onClick={handleShortcutClick} tabIndex={0}>
                            Shortcuts
                        </MenuItem>
                        <MenuItem onClick={logout} tabIndex={0}>
                            Logout
                        </MenuItem>
                    </MenuItemsWrapper>
                )}
            </Dropdown>
        </>
    );
};

export default DropdownMenu;
