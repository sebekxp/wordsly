import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import NavigationWord from '../NavigationWord';
import { bookmarkType as Type } from '../../utils/BookmarkType';
import { fetchUserWords } from '../../../actions/words/fetchUserWords';
import AddWordsInput from '../AddWordsInput';
import { Container, Wrapper } from './NavigationWordRenderer.style';
import { authProp, wordProp } from '../../utils/propTypes';
import { setUserPreferences } from '../../../redux/wordsToRenderReducer';

const NavigationWordRenderer = ({ words, bookmark, auth, fetchUserWordsAction, rendered }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchUserWordsAction({ id: auth.user.id });
                if (!res.ok) throw Error(res.statusText);

                const obj = await res.json();
                dispatch(setUserPreferences(obj));
            } catch (err) {
                console.error('Error during downloading user preferences', err);
            }
        };

        fetchData();
    }, [rendered, dispatch, fetchUserWordsAction, auth]);

    const renderExamples = () => {
        return words
            .filter(word => {
                return !word.deleted && word;
            })
            .map(word => <NavigationWord key={word._id} word={word} />);
    };

    const renderFavorites = () => {
        return words
            .filter(word => {
                return word.active && word;
            })
            .map(word => <NavigationWord key={word._id} word={word} />);
    };

    const selectBookmark = value => {
        let retVal;
        switch (value) {
            case Type.EXAMPLES:
                retVal = renderExamples();
                break;
            case Type.FLASH_CARDS:
                retVal = renderExamples();
                break;
            case Type.FAV:
                retVal = renderFavorites();
                break;
            default:
                retVal = renderExamples();
                break;
        }

        return retVal;
    };

    return (
        <Wrapper>
            <Container>{selectBookmark(bookmark)}</Container>
            <AddWordsInput />
        </Wrapper>
    );
};

NavigationWordRenderer.propsTypes = {
    words: PropTypes.arrayOf(wordProp.isRequired).isRequired,
    bookmark: PropTypes.string.isRequired,
    auth: authProp.isRequired,
    fetchUserWords: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender, bookmark, auth } = state;

    return {
        words: wordsToRender.words,
        bookmark,
        auth,
        rendered: wordsToRender.rendered
    };
};

export default connect(mapStateToProps, { fetchUserWordsAction: fetchUserWords })(
    NavigationWordRenderer
);
