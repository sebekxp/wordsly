import React, { useState } from 'react';
import styled from 'styled-components';
import { Star } from 'styled-icons/boxicons-solid/Star';
import { Star as BlankStar } from 'styled-icons/boxicons-regular/Star';
import { connect } from 'react-redux';
import { setActive } from '../../../WordsToRenderSlice';
import Colors from '../../../../Colors';
import { updateUserWords } from '../../../../auth/actions/updateUserWords';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';


const FavElementIcon = ({
                            word,
                            position,
                            auth,
                            setActive,
                            updateUserWords
                        }) => {
    const [hover, setHover] = useState(false);

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);
    };

    const handleClick = (e) => {
        setActive({ word, active: true });
        updateUserWords(auth.user.id, word, 'active');
        e.stopPropagation();
    };

    const selectIcon = () => {
        return hover ? Star : BlankStar;
    };

    const FavElemIcon = styled(selectIcon())`
            position: ${position};
            top: 0;
            right: 0;
            display: flex;
            color: ${Colors.FAV_ELEM_ICON}   
    `;

    return (
        <FavElemIcon onMouseEnter={onMouseEnterHandler}
                     onMouseLeave={onMouseLeaveHandler}
                     onClick={e => handleClick(e)}
                     title="Add to favorites word"
                     size={30}/>
    );
};


const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(
    mapStateToProps,
    { updateUserWords, setActive }
)(withRouter(FavElementIcon));