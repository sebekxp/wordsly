import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';

const Search = (props) => {
    const { words } = props;

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase().trim();
        const navigationWord = window.document.getElementsByClassName('navigation-word');
        const navWordToArray = [...navigationWord];

        for (let i = 0; i < words.length; i++) {
            const wordName = words[i].wordName.toLowerCase();
            if (wordName.includes(inputValue)) {
                navWordToArray[i].style.display = '';
            } else {
                navigationWord[i].style.display = 'none';
            }
        }
    };

    const formGroupStyle = {
        width: '360px',
        margin: '100px auto'
    };

    const inputStyle = {
        fontSize: '18px'
    };

    return (
        <FormGroup style={formGroupStyle}>
            <Input
                style={inputStyle}
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search word..."
                onChange={(e) => handleInputChange(e)}
            />
        </FormGroup>
    );
};

const mapStateToProps = (state) => {
    const { wordsToRender } = state;
    return { words: wordsToRender.words };
};

export default connect(mapStateToProps)(Search);
