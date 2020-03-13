import React from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
import { connect } from 'react-redux';
import { bookmarkType as Type } from '../../utils/BookmarkType';
import AddWordsInput from '../AddWordsInput';
import { Container, ScrolledList } from './NavigationWordRenderer.style';
import { authProp, wordProp } from '../../utils/propTypes';
import NavigationWordItemRow from './NavigationWordItemRow';

const NavigationWordRenderer = ({ words, bookmark }) => {
    const getExamples = () => {
        return words;
    };

    const getFavorites = () => {
        return words.filter(word => word.active && word);
    };

    const selectBookmark = value => {
        let retVal;
        if (value === Type.EXAMPLES || value === Type.FLASH_CARDS) {
            retVal = getExamples();
        } else {
            retVal = getFavorites();
        }

        return retVal;
    };

    const createItemData = memoize(items => ({
        items
    }));

    const itemData = createItemData(selectBookmark(bookmark));

    return (
        <div>
            <Container>
                <ScrolledList
                    useIsScrolling
                    height={695}
                    itemCount={
                        bookmark === Type.EXAMPLES || bookmark === Type.FLASH_CARDS
                            ? words.length
                            : getFavorites().length
                    }
                    itemData={itemData}
                    itemSize={56} // 56px 53 height + 3 margin-bottom
                    width={340}
                >
                    {NavigationWordItemRow}
                </ScrolledList>
            </Container>
            <AddWordsInput />
        </div>
    );
};

NavigationWordRenderer.propsTypes = {
    words: PropTypes.arrayOf(wordProp.isRequired).isRequired,
    bookmark: PropTypes.string.isRequired,
    auth: authProp.isRequired,
    fetchUserWords: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender, bookmark } = state;

    return {
        words: wordsToRender.words,
        bookmark,
        rendered: wordsToRender.rendered
    };
};

export default connect(mapStateToProps, null)(NavigationWordRenderer);
