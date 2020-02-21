import { createSlice } from '@reduxjs/toolkit';
import { bookmarkType as Type } from '../topElements/bookmarks/BookmarkType';


const initialState = {
    words: [],
    wordToShow: undefined
};

const getActiveWordsIndex = ({ words }) => {
    return words.map((word, i) => word.active ? i : null).filter(obj => obj != null).sort();
};

const getIndex = ({ words }, word) => {
    return words.findIndex(obj => obj.wordName === word.wordName);
};

const findNext = (num, array) => {
    let temp = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            temp = array[i];
            break;
        }
    }

    return temp;
};

const findPrev = (num, array) => {
    let temp = -1;
    for (let i = num; i >= 0; i--) {
        if (array[i] < num) {
            temp = array[i];
            break;
        }
    }

    return temp;
};

const findByName = ({ words }, name) => {
    return words.find(word => word.wordName === name);
};

const updatePreferences = (state, collection, option) => {
    if (collection !== undefined) {
        collection.forEach(obj => {
            const word = findByName(state, obj);
            const targetWord = { ...word };
            const index = getIndex(state, targetWord);
            if (state.words[index] !== undefined)
                state.words[index][option] = true;
        });
    }
};

const wordsToRender = createSlice({
    name: 'WordsToRender',
    initialState,
    reducers: {
        setInitialState(state, action) {
            state.words = action.payload;
            [state.wordToShow] = state.words;
        },
        addWord(state, action) {
            const { words } = state;
            const index = getIndex(state, action.payload);

            if (index === -1)
                words.push(action.payload);
            else {
                alert('Word already exist.');
            }
        },
        setActive(state, action) {
            const { words, wordToShow } = state;
            const { word, active } = action.payload;
            const index = getIndex(state, word);
            words[index].active = active;

            // Update wordToShow if Match
            if (words[index].wordName === state.wordToShow.wordName)
                wordToShow.active = active;
        },
        setDeleted(state, action) {
            const { words } = state;
            const { word, deleted } = action.payload;
            const index = getIndex(state, word);
            words[index].deleted = deleted;
        },
        setKnowWord(state, action) {
            const { words } = state;
            const { word, knowWord } = action.payload;
            const index = getIndex(state, word);
            words[index].knowWord = knowWord;
        },
        setWordToShow(state, action) {
            state.wordToShow = action.payload;
        },
        setFavWordToShow(state, action) {
            const bookmark = action.activeBookmark;
            if (Type.FAV === bookmark) {
                const favWordsIndex = getActiveWordsIndex(state);

                if (favWordsIndex[0] !== undefined)
                    state.wordToShow = state.words[favWordsIndex[0]];
            }
        },
        setNextWordToShow(state, action) {
            const bookmark = action.activeBookmark;
            const index = getIndex(state, state.wordToShow);

            if (bookmark !== Type.FAV) {
                if (index + 1 < state.words.length) {
                    state.wordToShow = state.words[index + 1];
                }
            } else {
                const favWordsIndex = getActiveWordsIndex(state);
                const i = findNext(index, favWordsIndex);
                if (i !== -1) {
                    state.wordToShow = state.words[i];
                }
            }
        },
        setPrevWordToShow(state, action) {
            const bookmark = action.activeBookmark;
            const index = getIndex(state, state.wordToShow);

            // To move only by examples
            if (bookmark !== Type.FAV) {
                if (index - 1 >= 0) {
                    state.wordToShow = state.words[index - 1];
                }
            } else {
                const favWordsIndex = getActiveWordsIndex(state);
                const i = findPrev(index, favWordsIndex);
                if (i !== -1) {
                    state.wordToShow = state.words[i];
                }
            }
        },
        setUserPreferences(state, action) {
            const { active, deleted, knowWord } = action.payload;
            updatePreferences(state, active, 'active');
            updatePreferences(state, knowWord, 'knowWord');
            updatePreferences(state, deleted, 'deleted');
        }
    }
});

export const {
    setInitialState,
    addWord,
    setActive,
    setDeleted,
    setWordToShow,
    setNextWordToShow,
    setPrevWordToShow,
    setKnowWord,
    setFavWordToShow,
    setUserPreferences
} = wordsToRender.actions;

export default wordsToRender.reducer;