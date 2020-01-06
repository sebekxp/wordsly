import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordsContainer from "./components/WordContainer";
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import {configureStore} from "@reduxjs/toolkit";
import Search from "./components/Search";


const store = configureStore({
    reducer: rootReducer
});

function App() {
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
