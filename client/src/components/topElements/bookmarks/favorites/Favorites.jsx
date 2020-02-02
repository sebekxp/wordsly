import React from 'react';
import { useDispatch } from 'react-redux';
import Examples from '../../../mediumElements/wordContent/Examples';
import { setFavWordToShow } from '../../../mediumElements/WordsToRenderSlice';


const Favorites = () => {
    const dispatch = useDispatch();
    dispatch(setFavWordToShow());

    return <Examples/>;
};

export default Favorites;