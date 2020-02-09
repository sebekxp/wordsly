import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import WordsContainer from './components/WordContainer';
import store from './reducers';
import Search from './components/Search';
import { fetchWords } from './components/mediumElements/WordsToRenderSlice';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/auth/Landing';

function App() {
    store.dispatch(fetchWords());

    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Landing}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/home'>
                    <div className="App">
                        <Search/>
                        <WordsContainer/>
                    </div>
                </Route>
            </Router>
        </Provider>
    );
}

export default App;
