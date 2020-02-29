import React from 'react';
import { useDispatch } from 'react-redux';
import Examples from '../WordContent/Examples';
import { setFavWordToShow } from '../../redux/wordsToRenderReducer';

const Favorites = () => {
    const dispatch = useDispatch();
    dispatch(setFavWordToShow());

    return <Examples />;
};

export default Favorites;
