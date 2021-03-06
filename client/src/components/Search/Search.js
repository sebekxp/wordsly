import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroupWrapper, InputWrapper } from './Search.style';
import { wordProp } from '../utils/propTypes';

const Search = ({ words }) => {
    const handleInputChange = e => {
        const inputValue = e.target.value.toLowerCase().trim();
        const navigationWord = window.document.getElementsByClassName('navigation-word');
        const navWordToArray = [...navigationWord];

        for (let i = 0; i < navWordToArray.length; i++) {
            const wordName = words[i].wordName.toLowerCase();
            if (wordName.includes(inputValue)) {
                navWordToArray[i].style.display = '';
            } else {
                navigationWord[i].style.display = 'none';
            }
        }
    };

    return (
        <FormGroupWrapper>
            <InputWrapper
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search word..."
                onChange={e => handleInputChange(e)}
            />
        </FormGroupWrapper>
    );
};

Search.propsTypes = {
    words: PropTypes.arrayOf(wordProp.isRequired).isRequired
};

const mapStateToProps = state => {
    const { wordsToRender } = state;

    return { words: wordsToRender.words };
};

export default connect(mapStateToProps)(Search);
