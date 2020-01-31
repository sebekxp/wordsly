import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import WordsContainer from './components/WordContainer';
import store from './reducers';
import Search from './components/Search';
import { fetchWords } from './components/mediumElements/WordsToRenderSlice';

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
