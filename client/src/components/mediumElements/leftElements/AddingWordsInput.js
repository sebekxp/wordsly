import React from "react";
import Colors from "../../topElements/Colors";
import styled from 'styled-components';

const AddingWordsInput = () => {
    const AddingWordsInput = styled.div`
        display: flex;
        width: 275px;
        height: 47px;
        flex-grow: 1;
        border-bottom-left-radius: 10px;
        background-color: ${Colors.DEFAULT_GREY};
    `;
    const handleChange = () => {
    };

    return (
        <AddingWordsInput>

        </AddingWordsInput>
    );

};
export default AddingWordsInput;