import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './ParagraphWrapper.style';

const ParagraphWrapper = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

ParagraphWrapper.prototype = {
    children: PropTypes.element.isRequired
};

export default ParagraphWrapper;
