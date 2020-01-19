import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordsContainer from "./components/WordContainer";
import {Provider} from 'react-redux'
import {rootReducer} from './reducers'
import {configureStore} from "@reduxjs/toolkit";
import Search from "./components/Search";
import {fetchWords} from "./components/mediumElements/WordsToRenderSlice";

export const store = configureStore({
    reducer: rootReducer
});


function App() {
    store.dispatch(fetchWords());
    return (
        <Provider store={store}>
            <div className="App">
                <Search/>
                <WordsContainer/>
            </div>
        </Provider>
    );
}

export default App;
