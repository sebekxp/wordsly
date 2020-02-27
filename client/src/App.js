import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';
// noinspection ES6CheckImport
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reducers';
import Search from './components/Search';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Landing from './components/Auth/Landing';
import { setCurrentUser } from './redux/authReducer';
import { fetchWords } from './actions/words/fetchWordsCollection';
import WordContentWrapper from './components/WordContent/WordContentWrapper';

(function keepUserLoggedIn() {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        const decoded = jwtDecode(token);
        store.dispatch(setCurrentUser(decoded));
    }
})();

const App = () => {
    store.dispatch(fetchWords());

    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home">
                    <div className="App">
                        <Search />
                        <WordContentWrapper />
                    </div>
                </Route>
            </Router>
        </Provider>
    );
};

export default App;
