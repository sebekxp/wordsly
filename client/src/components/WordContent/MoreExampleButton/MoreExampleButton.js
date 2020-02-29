import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ExpandMore } from 'styled-icons/material/ExpandMore';
import { ExpandLess } from 'styled-icons/material/ExpandLess';
import { ExpandHideIcon, MoreExamples } from './MoreExampleButton.style';

const MoreExampleButton = ({ expand, setExpand }) => {
    const toggleMoreExample = () => {
        setExpand(!expand);
    };

    useEffect(() => {
        const handleUserKeyPress = event => {
            const { keyCode } = event;

            if (keyCode === 32) {
                toggleMoreExample();
            }
        };
        window.addEventListener('keyup', handleUserKeyPress);

        return () => {
            window.removeEventListener('keyup', handleUserKeyPress);
        };
    });

    const selectIcon = () => {
        return !expand ? ExpandMore : ExpandLess;
    };

    return (
        <MoreExamples onClick={toggleMoreExample}>
            {!expand ? 'More' : 'Less'}
            <ExpandHideIcon as={selectIcon()} />
        </MoreExamples>
    );
};

MoreExampleButton.propsTypes = {
    expand: PropTypes.bool.isRequired,
    setExpand: PropTypes.func.isRequired
};

export default MoreExampleButton;
