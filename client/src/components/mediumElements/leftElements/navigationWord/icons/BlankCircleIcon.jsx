import React from 'react';
import styled from 'styled-components';
import { Circle } from 'styled-icons/fa-regular/Circle';
import { CheckCircle } from 'styled-icons/boxicons-solid/CheckCircle';
import { useDispatch } from 'react-redux';
import { decrementKnownWord, incrementKnownWord } from '../../../../topElements/progressBar/ProgressBarSlice';
import { setKnowWord } from '../../../WordsToRenderSlice';
import Colors from '../../../../Colors';


const BlankCircleIcon = ({ word, hover }) => {
    const blank = !word.knowWord;
    const dispatch = useDispatch();


    const updateProgBar = () => {
        dispatch(setKnowWord({ word, knowWord: !word.knowWord }));
        // store.dispatch(fetchAndUpdateKnowWord({word: props.word, knowWord: !props.word.knowWord}));
        if (blank)
            dispatch(incrementKnownWord());
        else
            dispatch(decrementKnownWord());
    };

    const selectIcon = () => {
        return blank ? Circle : CheckCircle;
    };

    const setColor = () => {
        return hover ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER :
            Colors.NAVIGATION_WORD_BACKGROUND;
    };

    const GreenCircleIcon = styled(selectIcon())`
        color: #28a745;
        padding: 12px 12px;
        width: 53.59px;
        height: 53.9px;
        margin-right: 3px;
        border-radius: 5px;
        background-color: ${setColor()}
    `;

    return (
        <>
            <GreenCircleIcon
                onClick={e => updateProgBar(e)}
                title="Mark as known word"/>
        </>
    );
};

export default BlankCircleIcon;