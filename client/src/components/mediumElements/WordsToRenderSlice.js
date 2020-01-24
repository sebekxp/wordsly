import {createSlice} from "@reduxjs/toolkit";
import {bookmarkType as Type} from "../topElements/bookmarks/BookmarkType";
import {OBJWORDS as words} from "../../components/words";
import axios from "axios";


const initialState = {
    words: [...words].filter((obj, index) => index < 20).map(obj =>
        Object.assign(obj, {
            active: false,
            deleted: false,
            knowWord: false,
        })),
    wordToShow: words[0],
};

const getActiveWordsIndex = (state) => {
    return state.words.map((word, i) => word.active ? i : null).filter(obj => obj != null).sort();
};

const getIndex = (state, word) => {
    return state.words.findIndex(obj => obj.wordName === word.wordName);
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


const wordsToRender = createSlice({
    name: 'WordsToRender',
    initialState,
    reducers: {
        setInitialState(state, action) {
            state.words = action.payload;
            state.wordToShow = state.words[0];
        },
        addWord(state, action) {
            const index = getIndex(state, action.payload);

            if (index === -1)
                state.words.push(action.payload);
            else {
                alert("Word already exist.")
            }
        },
        removeWord(state, action) {
            const wordName = action.payload;
            const index = state.words.findIndex(obj => obj.wordName === wordName);

            state.words = state.words.filter((obj, i) => {
                return i !== index
            });
        },
        setActive(state, action) {
            const {word, active} = action.payload;
            const index = getIndex(state, word);
            state.words[index].active = active;

            // Update wordToShow if Match
            if (state.words[index].wordName === state.wordToShow.wordName)
                state.wordToShow.active = active;
        },
        findByName(state, action) {
            const {word} = action.payload;
            const index = getIndex(state, word);

            return state.words[index];
        },
        setDeleted(state, action) {
            const {word, deleted} = action.payload;
            const index = getIndex(state, word);
            state.words[index].deleted = deleted;
        },
        setKnowWord(state, action) {
            const {word, knowWord} = action.payload;
            // console.log(word, knowWord);
            const index = getIndex(state, word);
            state.words[index].knowWord = knowWord;
            // return state.words
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
        }
    }
});

export const {
    setInitialState,
    addWord,
    setActive,
    removeWord,
    findByName,
    setDeleted,
    setWordToShow,
    setNextWordToShow,
    setPrevWordToShow,
    setKnowWord,
    setFavWordToShow
} = wordsToRender.actions;
export default wordsToRender.reducer;

export function fetchWords() {
    return (dispatch) => {
        fetch('http://192.168.142.23:5000/api/words', {
            method: 'GET',
        }).then(res => {
            console.log(res.json());
            return res.json();
        }).then(obj => {
            console.log(obj);
            dispatch(setInitialState(obj))
        }).catch(err => err.message);
    };
}

export function fetchAndUpdateKnowWord({word, knowWord}) {
    return function (dispatch) {
        // dispatch(setKnowWord({word, knowWord}));
        console.log(word);
        fetch('http://localhost:5000/api/words/updateKnowWord', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(word)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}