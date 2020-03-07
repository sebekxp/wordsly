import { createSlice } from '@reduxjs/toolkit';
import { bookmarkType as Type } from '../components/utils/BookmarkType';

const initialState = {
    words: [],
    wordToShow: undefined
};

const getActiveWordsIndex = ({ words }) => {
    return words
        .map((word, i) => (word.active ? i : null))
        .filter(obj => obj != null)
        .sort();
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

const updateObjectInArray = (words, action) => {
    const array = [...words];

    return array.map((item, index) => {
        if (index !== action.index) {
            return item;
        }

        return {
            ...item,
            ...action.option
        };
    });
};

const updatePreferences = (state, optionsArray, option) => {
    const { words } = state;
    const newWords = [...words];
    if (words === undefined) return state;
    optionsArray.forEach(obj => {
        const word = findByName(state, obj);
        const targetWord = { ...word };
        const index = getIndex(state, targetWord);

        if (words[index] !== undefined) {
            newWords.splice(index, 1, {
                ...newWords[index],
                [option]: true
            });
        }
    });

    return {
        ...state,
        words: newWords
    };
};

const wordsToRender = createSlice({
    name: 'WordsToRender',
    initialState,
    reducers: {
        setInitialState(state, action) {
            const words = action.payload;

            return {
                words,
                wordToShow: words[0]
            };
        },
        addWord(state, action) {
            const { words } = state;
            const newWords = [...words];
            const index = getIndex(state, action.payload);

            if (index === -1) newWords.push(action.payload);
            else {
                alert('Word already exist.');
            }

            return {
                ...state,
                newWords
            };
        },
        setActive(state, action) {
            const { words, wordToShow } = state;
            const { word, active } = action.payload;
            const index = getIndex(state, word);
            const updatedWords = updateObjectInArray(words, { index, option: { active } });

            // Update wordToShow if Match
            if (words[index].wordName === state.wordToShow.wordName) {
                const newWordToShow = {
                    ...wordToShow,
                    active
                };

                return {
                    words: updatedWords,
                    wordToShow: newWordToShow
                };
            }

            return {
                ...state,
                words: updatedWords
            };
        },
        setDeleted(state, action) {
            const { words } = state;
            const { word, deleted } = action.payload;
            const index = getIndex(state, word);
            const updatedWords = updateObjectInArray(words, { index, option: { deleted } });

            return {
                ...state,
                words: updatedWords
            };
        },
        setKnowWord(state, action) {
            const { words } = state;
            const { word, knowWord } = action.payload;
            const index = getIndex(state, word);
            const updatedWords = updateObjectInArray(words, { index, option: { knowWord } });

            return {
                ...state,
                words: updatedWords
            };
        },
        setWordToShow(state, action) {
            const targetWordName = action.payload;
            for (let i = 0; i < state.words.length; i++) {
                if (state.words[i].wordName === targetWordName) {
                    return {
                        ...state,
                        wordToShow: state.words[i]
                    };
                }
            }

            return {
                ...state
            };
        },
        setFavWordToShow(state, action) {
            const bookmark = action.activeBookmark;
            if (Type.FAV === bookmark) {
                const favWordsIndex = getActiveWordsIndex(state);

                if (favWordsIndex[0] !== undefined) {
                    return {
                        ...state,
                        wordToShow: state.words[favWordsIndex[0]]
                    };
                }
            }

            return {
                ...state
            };
        },
        setNextWordToShow(state, action) {
            const bookmark = action.activeBookmark;
            const index = getIndex(state, state.wordToShow);
            let localState = {};

            if (bookmark !== Type.FAV) {
                if (index + 1 < state.words.length) {
                    localState = {
                        ...state,
                        wordToShow: state.words[index + 1]
                    };
                }
            } else {
                const favWordsIndex = getActiveWordsIndex(state);
                const i = findNext(index, favWordsIndex);
                if (i !== -1) {
                    localState = {
                        ...state,
                        wordToShow: state.words[i]
                    };
                }
            }

            return {
                ...localState
            };
        },
        setPrevWordToShow(state, action) {
            const bookmark = action.activeBookmark;
            const index = getIndex(state, state.wordToShow);
            let localState = {};

            // To move only by examples
            if (bookmark !== Type.FAV) {
                if (index - 1 >= 0) {
                    localState = {
                        ...state,
                        wordToShow: state.words[index - 1]
                    };
                }
            } else {
                const favWordsIndex = getActiveWordsIndex(state);
                const i = findPrev(index, favWordsIndex);
                if (i !== -1) {
                    localState = {
                        ...state,
                        wordToShow: state.words[i]
                    };
                }
            }

            return {
                ...localState
            };
        },
        setUserPreferences(state, action) {
            const { active, deleted, knowWord } = action.payload;
            const tempState = updatePreferences(state, active, 'active');
            const tempState1 = updatePreferences(tempState, knowWord, 'knowWord');
            const tempState2 = updatePreferences(tempState1, deleted, 'deleted');

            return {
                ...tempState2
            };
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
