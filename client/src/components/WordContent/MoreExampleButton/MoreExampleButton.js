import React, { useEffect } from 'react';
import { ExpandMore } from 'styled-icons/material/ExpandMore';
import { ExpandLess } from 'styled-icons/material/ExpandLess';
import { ExpandHideIcon, MoreExamples } from './MoreExampleButton.style';

const MoreExampleButton = ({ expand, setExpand }) => {
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

    const toggleMoreExample = () => {
        setExpand(!expand);
    };

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

export default MoreExampleButton;
