import React from 'react';
import Examples from "../../../mediumElements/wordContent/Examples";
import {setFavWordToShow} from "../../../mediumElements/WordsToRenderSlice";
import {useDispatch} from "react-redux";


const Favorites = () => {
    const dispatch = useDispatch();
    dispatch(setFavWordToShow());

    return  <Examples/>
};

export default Favorites