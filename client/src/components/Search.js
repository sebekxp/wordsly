import React from 'react';
import styled from "styled-components";
import {OBJWORDS as words} from "./words";
import {Search as searchIcon} from 'styled-icons/icomoon/Search'
import Colors from '../components/topElements/Colors'
const Search = () => {

    const handleInputChange = (e) => {
        let inputValue = e.target.value.toLowerCase().trim();

        const navigationWord = window.document.getElementsByClassName("navigation-word");
        const navWordToArray = [...navigationWord];

        for (let i = 0; i < words.length; i++) {
            const wordName = words[i].wordName.toLowerCase();
            if (wordName.includes(inputValue)) {
                navWordToArray[i].style.display = "";
            } else {
                navigationWord[i].style.display = "none";
            }
        }
    };

    const SearchContainer = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 0px 5px;
        height: 50px;
        width: 360px;
        margin: auto;
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
    `;

    const SearchInput = styled.input`
        padding: 0 5px;
        border-radius: 10px;
        font-size: 20px;
        height: 100%    ;
        width: 100%;
        outline: none;
    `;

    const SearchIcon = styled(searchIcon)`
        position: absolute;
        color: ${Colors.DEFAULT_GREY};
        right: 10px;
        width: 25px;
        height: 25px;
    `;

    return (
        <SearchContainer>
            <SearchInput type="text" name="" id="search" placeholder={"Search word ..."}
                         onChange={(e) => handleInputChange(e)}/>
            <SearchIcon/>
        </SearchContainer>
    );
};

export default Search
