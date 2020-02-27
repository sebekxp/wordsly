import React from 'react';
import { Wrapper } from './ParagraphWrapper.style';

const ParagraphWrapper = ({ inputRef, children }) => {
    return <Wrapper ref={inputRef}>{children}</Wrapper>;
};

export default ParagraphWrapper;
